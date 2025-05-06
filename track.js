var groceryDB = {
    "012345678905": { name: "NutriYum Cereal", expiry: "2025-06-15", category: "grains" },
    "098765432109": { name: "Fresh Milk", expiry: "2025-04-10", category: "dairy" },
    "456789123456": { name: "Whole Wheat Bread", expiry: "2025-04-20", category: "grains" }
};

var groceries = [];

function addGrocery() {
    var itemName = document.getElementById('item-name').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var category = document.getElementById('category').value;

    if (!itemName || !expiryDate) {
        alert("Please enter item name and expiry date!");
        return;
    }

    var today = new Date();
    var expiry = new Date(expiryDate);
    var daysLeft = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));

    groceries.push({ name: itemName, expiry: expiryDate, days: daysLeft, category: category });
    displayGroceries();
    updateChart();
    updateCountdown();

    if (daysLeft <= 7 && daysLeft > 0) alert(`Predictive alert: ${itemName} expires in ${daysLeft} days!`);
    if (daysLeft <= 0) alert(`${itemName} has expired!`);

    document.getElementById('item-name').value = '';
    document.getElementById('expiry-date').value = '';
}

function displayGroceries(filter = 'all') {
    var list = document.getElementById('grocery-list');
    list.innerHTML = '';
    groceries.forEach(g => {
        if (filter === 'all' || g.category === filter) {
            var li = document.createElement('li');
            li.classList.add('tile');
            li.textContent = `${g.name} - ${g.days} days left (${g.category})`;
            if (g.days <= 3 && g.days > 0) li.classList.add('expire-soon');
            if (g.days <= 0) li.classList.add('expired');
            list.appendChild(li);
        }
    });
}

function filterList() {
    displayGroceries(document.getElementById('category-filter').value);
}

function clearList() {
    groceries = [];
    displayGroceries();
    updateChart();
    document.getElementById('countdown').textContent = '';
}

function exportList() {
    var csv = "Name,Expiry,Category\n" + groceries.map(g => `${g.name},${g.expiry},${g.category}`).join('\n');
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'grocery_list.csv';
    a.click();
}

function bulkImport() {
    var input = prompt("Paste CSV (e.g., Milk,2025-04-10,dairy):");
    if (input) {
        input.split('\n').forEach(line => {
            var [name, expiry, category] = line.split(',');
            if (name && expiry && category) {
                var daysLeft = Math.floor((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24));
                groceries.push({ name, expiry, days: daysLeft, category });
            }
        });
        displayGroceries();
        updateChart();
        updateCountdown();
    }
}

function updateCountdown() {
    var soonest = groceries.reduce((min, g) => g.days < min && g.days > 0 ? g.days : min, Infinity);
    document.getElementById('countdown').textContent = soonest === Infinity ? 'No upcoming expiries' : `Next expiry in ${soonest} days`;
}

var chart = new Chart(document.getElementById('expiry-chart'), {
    type: 'bar',
    data: { labels: [], datasets: [{ label: 'Items by Category', data: [], backgroundColor: '#6200ea' }] },
    options: { scales: { y: { beginAtZero: true } } }
});

function updateChart() {
    var categories = ['dairy', 'vegetables', 'meat', 'grains', 'other'];
    var data = categories.map(cat => groceries.filter(g => g.category === cat).length);
    chart.data.labels = categories;
    chart.data.datasets[0].data = data;
    chart.update();
}

function updateGroceryList(barcode, item) {
    if (!item) {
        alert("Barcode not recognized! Try 012345678905, 098765432109, or 456789123456.");
        return;
    }

    var today = new Date();
    var expiry = new Date(item.expiry);
    var daysLeft = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));
    var category = item.category || 'other';

    groceries.push({ name: item.name, expiry: item.expiry, days: daysLeft, category: category });
    displayGroceries();
    updateChart();
    updateCountdown();

    if (daysLeft <= 7 && daysLeft > 0) alert(`Predictive alert: ${item.name} expires in ${daysLeft} days!`);
    if (daysLeft <= 0) alert(`${item.name} has expired!`);
}

function startScanner() {
    // Ensure the video element is visible when starting the scanner
    document.querySelector('#scanner-video').style.display = 'block';

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-video'),
            constraints: {
                width: 640,
                height: 480,
                facingMode: "environment" // Use the rear camera on mobile devices
            }
        },
        decoder: {
            readers: ["upc_reader", "ean_reader"] // Support UPC and EAN barcodes
        }
    }, function(err) {
        if (err) {
            console.error("Quagga initialization error:", err);
            alert("Error starting webcam: " + err.message);
            document.querySelector('#scanner-video').style.display = 'none';
            return;
        }
        Quagga.start();
        console.log("Webcam scanner started successfully.");
    });

    Quagga.onDetected(function(result) {
        var barcode = result.codeResult.code;
        console.log("Barcode detected:", barcode);

        var item = groceryDB[barcode];
        if (item) {
            updateGroceryList(barcode, item);
            Quagga.stop();
            document.querySelector('#scanner-video').style.display = 'none';
        } else {
            alert("Barcode not recognized! Try 012345678905, 098765432109, or 456789123456.");
        }
    });

    // Handle Quagga errors during scanning
    Quagga.onProcessed(function(result) {
        if (result && result.error) {
            console.error("Quagga processing error:", result.error);
        }
    });
}

function scanImage() {
    var file = document.getElementById('image-upload').files[0];
    if (!file) {
        alert("Please upload an image to scan!");
        return;
    }

    Quagga.decodeSingle({
        src: URL.createObjectURL(file),
        numOfWorkers: 0, // Disable web workers for simplicity in single image decoding
        inputStream: { size: 800 },
        decoder: { readers: ["upc_reader", "ean_reader"] }
    }, function(result) {
        if (result && result.codeResult) {
            var barcode = result.codeResult.code;
            console.log("Barcode detected from image:", barcode);

            var item = groceryDB[barcode];
            if (item) {
                updateGroceryList(barcode, item);
            } else {
                alert("Barcode not recognized! Try 012345678905, 098765432109, or 456789123456.");
            }
        } else {
            alert("No barcode detected in the image! Please upload a clearer image.");
        }
    });
}

displayGroceries();