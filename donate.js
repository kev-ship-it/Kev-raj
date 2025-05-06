var map = L.map('map').setView([13.0827, 80.2707], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

var ngos = [
    { lat: 13.0820, lng: 80.2750, name: "Chennai Hope NGO", type: "ngo", status: "Available" },
    { lat: 13.0870, lng: 80.2600, name: "Marina Care Home", type: "home", status: "Busy" },
    { lat: 13.0700, lng: 80.2850, name: "Anna Food Bank", type: "ngo", status: "Available" },
    { lat: 13.0950, lng: 80.2500, name: "T Nagar Shelter", type: "home", status: "Available" }
];
var markers = [];

function displayNGOs(filter = 'all') {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    ngos.forEach(ngo => {
        if (filter === 'all' || ngo.type === filter) {
            var marker = L.marker([ngo.lat, ngo.lng], {
                icon: L.divIcon({
                    className: 'ngo-marker',
                    html: `<div style="background: ${ngo.status === 'Available' ? '#6200ea' : '#d81b60'}; width: 20px; height: 20px; border-radius: 50%;"></div>`
                })
            }).addTo(map).bindPopup(`${ngo.name} - ${ngo.status}`);
            markers.push(marker);
        }
    });
    updateStatus();
}

function updateStatus() {
    var statusList = document.getElementById('ngo-status');
    statusList.innerHTML = '';
    ngos.forEach(ngo => {
        var li = document.createElement('li');
        li.classList.add('tile');
        li.textContent = `${ngo.name} - ${ngo.status}`;
        statusList.appendChild(li);
    });
}

function zoomMap() {
    var bounds = markers.map(m => m.getLatLng());
    if (bounds.length) map.fitBounds(bounds);
}

document.getElementById('ngo-type').addEventListener('change', function() {
    displayNGOs(this.value);
});

function donateFood() {
    var foodType = document.getElementById('food-type').value;
    var quantity = document.getElementById('quantity').value;
    var pickupTime = document.getElementById('pickup-time').value;
    var notes = document.getElementById('notes').value;

    if (!foodType || !quantity || !pickupTime) {
        alert("Please complete all required fields!");
        return;
    }

    var donation = `${foodType} (${quantity}) - Pickup: ${new Date(pickupTime).toLocaleString()}${notes ? ' - ' + notes : ''}`;
    alert(`Donation scheduled: ${donation}`);

    var log = document.getElementById('donation-log');
    var li = document.createElement('li');
    li.classList.add('tile');
    li.textContent = donation;
    log.insertBefore(li, log.firstChild);

    document.getElementById('food-type').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('pickup-time').value = '';
    document.getElementById('notes').value = '';
}

displayNGOs();