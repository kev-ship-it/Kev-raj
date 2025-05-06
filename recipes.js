var favorites = [];
var ingredientsList = ['rice', 'chicken', 'milk', 'sugar', 'bread', 'egg', 'pasta', 'cheese', 'potato', 'onion', 'tomato', 'banana', 'beef', 'fish', 'carrot', 'apple'];

// Expanded to ~150 recipes
var recipes = [
    { name: "Chicken Fried Rice", text: "Cook 1 cup rice. Sauté 200g diced chicken with 1 chopped onion, add soy sauce, and mix in rice with diced carrots.", needs: ['rice', 'chicken', 'onion', 'carrot'], difficulty: 'easy' },
    { name: "Milk Pudding", text: "Heat 2 cups milk with 1/4 cup sugar, stir in 2 tbsp cornstarch slurry, cook until thick, chill for 2 hours.", needs: ['milk', 'sugar'], difficulty: 'easy' },
    { name: "French Toast", text: "Beat 2 eggs with 1/4 cup milk, dip 4 bread slices, fry in butter until golden on both sides.", needs: ['bread', 'egg', 'milk'], difficulty: 'easy' },
    { name: "Cheesy Pasta Bake", text: "Boil 200g pasta, mix with 1 cup cheese and 1 diced tomato, bake at 180°C for 20 mins.", needs: ['pasta', 'cheese', 'tomato'], difficulty: 'medium' },
    { name: "Potato Soup", text: "Boil 3 diced potatoes with 1 chopped onion in 4 cups water, blend with 1 cup milk, season with salt.", needs: ['potato', 'onion', 'milk'], difficulty: 'easy' },
    { name: "Banana Bread", text: "Mash 3 bananas, mix with 1/2 cup sugar, 1 egg, 1 cup flour, bake at 175°C for 50 mins.", needs: ['banana', 'sugar', 'egg'], difficulty: 'medium' },
    { name: "Beef Stir-Fry", text: "Sauté 300g beef strips with 1 onion and 1 carrot, add soy sauce, serve over rice.", needs: ['beef', 'onion', 'carrot', 'rice'], difficulty: 'medium' },
    { name: "Fish Tacos", text: "Grill 200g fish, dice 1 tomato and 1 onion for salsa, wrap in bread slices.", needs: ['fish', 'tomato', 'onion', 'bread'], difficulty: 'medium' },
    { name: "Egg Fried Rice", text: "Scramble 2 eggs, mix with 1 cup cooked rice, 1 diced onion, and soy sauce.", needs: ['egg', 'rice', 'onion'], difficulty: 'easy' },
    { name: "Tomato Pasta", text: "Cook 200g pasta, sauté 2 diced tomatoes with 1 onion, mix with cheese.", needs: ['pasta', 'tomato', 'onion', 'cheese'], difficulty: 'easy' },
    { name: "Chicken Soup", text: "Simmer 200g chicken with 1 potato, 1 carrot, and 1 onion in 4 cups water for 45 mins.", needs: ['chicken', 'potato', 'carrot', 'onion'], difficulty: 'medium' },
    { name: "Apple Pie", text: "Slice 3 apples, mix with 1/4 cup sugar, wrap in dough made from flour and egg, bake at 180°C for 40 mins.", needs: ['apple', 'sugar', 'egg'], difficulty: 'hard' },
    { name: "Cheese Omelette", text: "Beat 3 eggs, cook in a pan, sprinkle 1/2 cup cheese, fold and serve.", needs: ['egg', 'cheese'], difficulty: 'easy' },
    { name: "Rice Pudding", text: "Cook 1 cup rice in 2 cups milk with 1/4 cup sugar, simmer until creamy.", needs: ['rice', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Beef and Potato Stew", text: "Brown 300g beef, add 2 diced potatoes and 1 carrot, simmer in broth for 1 hour.", needs: ['beef', 'potato', 'carrot'], difficulty: 'medium' },
    { name: "Banana Pancakes", text: "Mash 2 bananas, mix with 2 eggs and 1/2 cup flour, fry spoonfuls until golden.", needs: ['banana', 'egg'], difficulty: 'easy' },
    { name: "Fish Curry", text: "Sauté 1 onion and 1 tomato, add 200g fish and spices, simmer in 1 cup milk.", needs: ['fish', 'onion', 'tomato', 'milk'], difficulty: 'medium' },
    { name: "Chicken Pasta", text: "Cook 200g pasta, sauté 200g chicken with 1 onion, mix with cheese.", needs: ['pasta', 'chicken', 'onion', 'cheese'], difficulty: 'medium' },
    { name: "Bread Pudding", text: "Soak 4 bread slices in 2 cups milk with 1 egg and 1/4 cup sugar, bake at 175°C for 35 mins.", needs: ['bread', 'milk', 'egg', 'sugar'], difficulty: 'medium' },
    { name: "Potato Fritters", text: "Grate 2 potatoes, mix with 1 egg, fry spoonfuls until crispy.", needs: ['potato', 'egg'], difficulty: 'easy' },
    { name: "Tomato Soup", text: "Cook 3 diced tomatoes with 1 onion in 3 cups water, blend with 1/2 cup milk.", needs: ['tomato', 'onion', 'milk'], difficulty: 'easy' },
    { name: "Cheese Bread", text: "Mix 1 cup flour with 1/2 cup cheese and 1 egg, bake at 180°C for 25 mins.", needs: ['bread', 'cheese', 'egg'], difficulty: 'medium' },
    { name: "Chicken Curry", text: "Sauté 200g chicken with 1 onion and 1 tomato, simmer in spices and 1 cup milk.", needs: ['chicken', 'onion', 'tomato', 'milk'], difficulty: 'medium' },
    { name: "Banana Smoothie", text: "Blend 2 bananas with 1 cup milk and 2 tbsp sugar until smooth.", needs: ['banana', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Beef Tacos", text: "Cook 200g beef with 1 onion, serve in bread with diced tomato.", needs: ['beef', 'onion', 'bread', 'tomato'], difficulty: 'medium' },
    { name: "Fish Cakes", text: "Mix 200g mashed fish with 1 grated potato and 1 egg, fry until golden.", needs: ['fish', 'potato', 'egg'], difficulty: 'medium' },
    { name: "Egg Pasta", text: "Boil 200g pasta, scramble 2 eggs with 1/2 cup cheese, toss together.", needs: ['pasta', 'egg', 'cheese'], difficulty: 'easy' },
    { name: "Rice and Beans", text: "Cook 1 cup rice, sauté 1 onion with 1 tomato, mix in cooked beans.", needs: ['rice', 'onion', 'tomato'], difficulty: 'easy' },
    { name: "Apple Crisp", text: "Slice 2 apples, top with 1/4 cup sugar and crumbled bread, bake at 175°C for 30 mins.", needs: ['apple', 'sugar', 'bread'], difficulty: 'medium' },
    { name: "Carrot Cake", text: "Grate 2 carrots, mix with 1 egg, 1/2 cup sugar, and flour, bake at 180°C for 40 mins.", needs: ['carrot', 'egg', 'sugar'], difficulty: 'hard' },
    { name: "Potato Pancakes", text: "Grate 2 potatoes, mix with 1 egg and 1 onion, fry until crispy.", needs: ['potato', 'egg', 'onion'], difficulty: 'easy' },
    { name: "Chicken and Rice Bake", text: "Layer 200g chicken and 1 cup rice with 1 tomato, bake at 180°C for 45 mins.", needs: ['chicken', 'rice', 'tomato'], difficulty: 'medium' },
    { name: "Milk Rice", text: "Cook 1 cup rice in 2 cups milk with 1/4 cup sugar, serve warm.", needs: ['rice', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Beef and Onion Stir-Fry", text: "Sauté 200g beef with 1 onion, season with soy sauce.", needs: ['beef', 'onion'], difficulty: 'easy' },
    { name: "Fish and Chips", text: "Fry 200g fish and 2 sliced potatoes until golden and crispy.", needs: ['fish', 'potato'], difficulty: 'medium' },
    { name: "Banana Muffins", text: "Mash 2 bananas, mix with 1 egg, 1/2 cup sugar, 1 cup flour, bake at 175°C for 25 mins.", needs: ['banana', 'egg', 'sugar'], difficulty: 'medium' },
    { name: "Pasta Primavera", text: "Cook 200g pasta, sauté 1 carrot and 1 onion with cheese, toss together.", needs: ['pasta', 'carrot', 'onion', 'cheese'], difficulty: 'medium' },
    { name: "Beef Stew", text: "Brown 300g beef, simmer with 1 potato, 1 onion, and 1 carrot in broth for 1 hour.", needs: ['beef', 'potato', 'onion', 'carrot'], difficulty: 'medium' },
    { name: "Chicken Stir-Fry", text: "Sauté 200g chicken with 1 onion and 1 carrot, add soy sauce, serve with rice.", needs: ['chicken', 'onion', 'carrot', 'rice'], difficulty: 'medium' },
    { name: "Fish Soup", text: "Simmer 200g fish with 1 onion and 1 tomato in 3 cups water, season with spices.", needs: ['fish', 'onion', 'tomato'], difficulty: 'easy' },
    { name: "Egg Sandwich", text: "Scramble 2 eggs, place between 2 bread slices with cheese.", needs: ['egg', 'bread', 'cheese'], difficulty: 'easy' },
    { name: "Rice Cakes", text: "Cook 1 cup rice, mix with 1 egg, fry into small patties.", needs: ['rice', 'egg'], difficulty: 'easy' },
    { name: "Tomato Bread", text: "Toast 2 bread slices, top with diced tomato and cheese.", needs: ['bread', 'tomato', 'cheese'], difficulty: 'easy' },
    { name: "Potato Salad", text: "Boil 2 potatoes, mix with 1 onion and 1 egg, season with mayo.", needs: ['potato', 'onion', 'egg'], difficulty: 'easy' },
    { name: "Apple Smoothie", text: "Blend 2 apples with 1 cup milk and 2 tbsp sugar.", needs: ['apple', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Beef and Rice", text: "Cook 1 cup rice, sauté 200g beef with 1 onion, mix together.", needs: ['beef', 'rice', 'onion'], difficulty: 'medium' },
    { name: "Chicken Salad", text: "Grill 200g chicken, mix with 1 tomato and 1 onion, dress with mayo.", needs: ['chicken', 'tomato', 'onion'], difficulty: 'easy' },
    { name: "Fish Pie", text: "Layer 200g fish with 1 mashed potato and 1 cup cheese, bake at 180°C for 30 mins.", needs: ['fish', 'potato', 'cheese'], difficulty: 'medium' },
    { name: "Pasta Salad", text: "Cook 200g pasta, mix with 1 tomato and 1 onion, dress with oil.", needs: ['pasta', 'tomato', 'onion'], difficulty: 'easy' },
    { name: "Banana Pudding", text: "Layer 2 mashed bananas with 1 cup milk and sugar, chill.", needs: ['banana', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Carrot Soup", text: "Boil 2 carrots with 1 onion in 3 cups water, blend with 1 cup milk.", needs: ['carrot', 'onion', 'milk'], difficulty: 'easy' },
    { name: "Cheese Toast", text: "Top 2 bread slices with 1/2 cup cheese, bake at 180°C for 10 mins.", needs: ['bread', 'cheese'], difficulty: 'easy' },
    { name: "Beef Patties", text: "Mix 200g beef with 1 egg and 1 onion, fry into patties.", needs: ['beef', 'egg', 'onion'], difficulty: 'medium' },
    { name: "Chicken Pie", text: "Layer 200g chicken with 1 potato and 1 carrot, bake at 180°C for 40 mins.", needs: ['chicken', 'potato', 'carrot'], difficulty: 'hard' },
    { name: "Fish Salad", text: "Grill 200g fish, mix with 1 tomato and 1 onion.", needs: ['fish', 'tomato', 'onion'], difficulty: 'easy' },
    { name: "Egg Muffins", text: "Beat 3 eggs, mix with 1/2 cup cheese, bake at 175°C for 20 mins.", needs: ['egg', 'cheese'], difficulty: 'easy' },
    { name: "Rice Salad", text: "Cook 1 cup rice, mix with 1 tomato and 1 onion, dress with oil.", needs: ['rice', 'tomato', 'onion'], difficulty: 'easy' },
    { name: "Potato Pie", text: "Layer 2 mashed potatoes with 1 cup cheese, bake at 180°C for 30 mins.", needs: ['potato', 'cheese'], difficulty: 'medium' },
    { name: "Apple Cake", text: "Grate 2 apples, mix with 1 egg and 1/2 cup sugar, bake at 175°C for 35 mins.", needs: ['apple', 'egg', 'sugar'], difficulty: 'medium' },
    { name: "Beef Soup", text: "Simmer 200g beef with 1 onion and 1 carrot in 4 cups water for 1 hour.", needs: ['beef', 'onion', 'carrot'], difficulty: 'medium' },
    { name: "Chicken Tacos", text: "Cook 200g chicken with 1 onion, serve in bread with tomato.", needs: ['chicken', 'onion', 'bread', 'tomato'], difficulty: 'medium' },
    { name: "Fish Stew", text: "Simmer 200g fish with 1 potato and 1 onion in 3 cups water.", needs: ['fish', 'potato', 'onion'], difficulty: 'medium' },
    { name: "Egg Salad", text: "Boil 2 eggs, mix with 1 onion and 1 tomato.", needs: ['egg', 'onion', 'tomato'], difficulty: 'easy' },
    { name: "Rice Soup", text: "Cook 1 cup rice with 1 onion in 3 cups water, blend with milk.", needs: ['rice', 'onion', 'milk'], difficulty: 'easy' },
    { name: "Tomato Pie", text: "Layer 2 diced tomatoes with 1 cup cheese, bake at 180°C for 25 mins.", needs: ['tomato', 'cheese'], difficulty: 'medium' },
    { name: "Potato Cakes", text: "Grate 2 potatoes, mix with 1 egg, fry into cakes.", needs: ['potato', 'egg'], difficulty: 'easy' },
    { name: "Banana Cake", text: "Mash 2 bananas, mix with 1 egg and 1/2 cup sugar, bake at 175°C for 35 mins.", needs: ['banana', 'egg', 'sugar'], difficulty: 'medium' },
    { name: "Beef Salad", text: "Grill 200g beef, mix with 1 tomato and 1 onion.", needs: ['beef', 'tomato', 'onion'], difficulty: 'easy' },
    { name: "Chicken Muffins", text: "Mix 200g chicken with 1 egg and 1/2 cup cheese, bake at 175°C for 25 mins.", needs: ['chicken', 'egg', 'cheese'], difficulty: 'medium' },
    { name: "Fish Sandwich", text: "Grill 200g fish, place between 2 bread slices with tomato.", needs: ['fish', 'bread', 'tomato'], difficulty: 'easy' },
    { name: "Egg Soup", text: "Scramble 2 eggs, mix with 1 onion in 3 cups water.", needs: ['egg', 'onion'], difficulty: 'easy' },
    { name: "Rice Patties", text: "Cook 1 cup rice, mix with 1 egg and 1 onion, fry into patties.", needs: ['rice', 'egg', 'onion'], difficulty: 'easy' },
    { name: "Tomato Salad", text: "Dice 2 tomatoes, mix with 1 onion and cheese.", needs: ['tomato', 'onion', 'cheese'], difficulty: 'easy' },
    { name: "Potato Soup with Cheese", text: "Boil 2 potatoes with 1 onion, blend with 1 cup cheese.", needs: ['potato', 'onion', 'cheese'], difficulty: 'easy' },
    { name: "Apple Bread", text: "Grate 2 apples, mix with 1 egg and 1 cup flour, bake at 175°C for 40 mins.", needs: ['apple', 'egg', 'bread'], difficulty: 'medium' },
    { name: "Beef Pie", text: "Layer 200g beef with 1 potato and 1 onion, bake at 180°C for 40 mins.", needs: ['beef', 'potato', 'onion'], difficulty: 'hard' },
    { name: "Chicken Soup with Rice", text: "Simmer 200g chicken with 1 cup rice and 1 onion in 4 cups water.", needs: ['chicken', 'rice', 'onion'], difficulty: 'medium' },
    { name: "Fish Patties", text: "Mix 200g fish with 1 egg and 1 potato, fry into patties.", needs: ['fish', 'egg', 'potato'], difficulty: 'medium' },
    { name: "Egg Bread", text: "Beat 2 eggs, mix with 1 cup flour, bake at 180°C for 25 mins.", needs: ['egg', 'bread'], difficulty: 'medium' },
    { name: "Rice and Tomato Soup", text: "Cook 1 cup rice with 2 tomatoes in 3 cups water.", needs: ['rice', 'tomato'], difficulty: 'easy' },
    { name: "Potato Bread", text: "Mash 2 potatoes, mix with 1 egg and 1 cup flour, bake at 175°C for 40 mins.", needs: ['potato', 'egg', 'bread'], difficulty: 'medium' },
    { name: "Banana Pie", text: "Mash 2 bananas, mix with 1/4 cup sugar, bake in dough at 180°C for 30 mins.", needs: ['banana', 'sugar'], difficulty: 'medium' },
    { name: "Beef and Carrot Stir-Fry", text: "Sauté 200g beef with 1 carrot, season with soy sauce.", needs: ['beef', 'carrot'], difficulty: 'easy' },
    { name: "Chicken Patties", text: "Mix 200g chicken with 1 egg and 1 onion, fry into patties.", needs: ['chicken', 'egg', 'onion'], difficulty: 'medium' },
    { name: "Fish Soup with Milk", text: "Simmer 200g fish with 1 onion in 1 cup milk and 2 cups water.", needs: ['fish', 'onion', 'milk'], difficulty: 'easy' },
    { name: "Egg and Cheese Sandwich", text: "Scramble 2 eggs, place on bread with 1/2 cup cheese.", needs: ['egg', 'bread', 'cheese'], difficulty: 'easy' },
    { name: "Rice Bread", text: "Cook 1 cup rice, mix with 1 egg and 1 cup flour, bake at 175°C for 35 mins.", needs: ['rice', 'egg', 'bread'], difficulty: 'medium' },
    { name: "Tomato and Cheese Bread", text: "Top 2 bread slices with 1 diced tomato and 1/2 cup cheese, bake at 180°C for 10 mins.", needs: ['bread', 'tomato', 'cheese'], difficulty: 'easy' },
    { name: "Potato Stir-Fry", text: "Sauté 2 diced potatoes with 1 onion, season with spices.", needs: ['potato', 'onion'], difficulty: 'easy' },
    { name: "Apple Pancakes", text: "Grate 2 apples, mix with 2 eggs and 1/2 cup flour, fry into pancakes.", needs: ['apple', 'egg'], difficulty: 'easy' },
    { name: "Beef and Tomato Soup", text: "Simmer 200g beef with 2 tomatoes in 3 cups water.", needs: ['beef', 'tomato'], difficulty: 'medium' },
    { name: "Chicken Bread", text: "Mix 200g chicken with 1 egg and 1 cup flour, bake at 175°C for 35 mins.", needs: ['chicken', 'egg', 'bread'], difficulty: 'medium' },
    { name: "Fish Bread", text: "Mix 200g fish with 1 egg and 1 cup flour, bake at 175°C for 35 mins.", needs: ['fish', 'egg', 'bread'], difficulty: 'medium' },
    { name: "Egg and Tomato Stir-Fry", text: "Scramble 2 eggs, sauté with 1 diced tomato.", needs: ['egg', 'tomato'], difficulty: 'easy' },
    { name: "Rice and Carrot Soup", text: "Cook 1 cup rice with 1 carrot in 3 cups water.", needs: ['rice', 'carrot'], difficulty: 'easy' },
    { name: "Potato and Tomato Salad", text: "Boil 2 potatoes, mix with 1 diced tomato.", needs: ['potato', 'tomato'], difficulty: 'easy' },
    { name: "Banana Bread Pudding", text: "Soak 2 bread slices in 1 cup milk with mashed banana, bake at 175°C for 30 mins.", needs: ['banana', 'bread', 'milk'], difficulty: 'medium' },
    { name: "Beef and Potato Pie", text: "Layer 200g beef with 2 mashed potatoes, bake at 180°C for 40 mins.", needs: ['beef', 'potato'], difficulty: 'medium' },
    { name: "Chicken and Tomato Stir-Fry", text: "Sauté 200g chicken with 1 tomato, season with soy sauce.", needs: ['chicken', 'tomato'], difficulty: 'easy' },
    { name: "Fish and Onion Stir-Fry", text: "Sauté 200g fish with 1 onion, season with spices.", needs: ['fish', 'onion'], difficulty: 'easy' },
    { name: "Egg and Potato Salad", text: "Boil 2 eggs and 2 potatoes, mix with onion.", needs: ['egg', 'potato', 'onion'], difficulty: 'easy' },
    { name: "Rice and Milk Pudding", text: "Cook 1 cup rice in 2 cups milk with sugar, simmer until thick.", needs: ['rice', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Tomato and Onion Soup", text: "Cook 2 tomatoes with 1 onion in 3 cups water.", needs: ['tomato', 'onion'], difficulty: 'easy' },
    { name: "Potato and Cheese Bread", text: "Mash 2 potatoes, mix with 1/2 cup cheese and 1 egg, bake at 175°C for 35 mins.", needs: ['potato', 'cheese', 'egg'], difficulty: 'medium' },
    { name: "Apple and Banana Smoothie", text: "Blend 1 apple and 1 banana with 1 cup milk.", needs: ['apple', 'banana', 'milk'], difficulty: 'easy' },
    { name: "Beef and Cheese Sandwich", text: "Cook 200g beef, place on bread with 1/2 cup cheese.", needs: ['beef', 'bread', 'cheese'], difficulty: 'easy' },
    { name: "Chicken and Potato Soup", text: "Simmer 200g chicken with 2 potatoes in 4 cups water.", needs: ['chicken', 'potato'], difficulty: 'medium' },
    { name: "Fish and Tomato Salad", text: "Grill 200g fish, mix with 1 diced tomato.", needs: ['fish', 'tomato'], difficulty: 'easy' },
    { name: "Egg and Rice Soup", text: "Cook 1 cup rice with 2 eggs in 3 cups water.", needs: ['egg', 'rice'], difficulty: 'easy' },
    { name: "Pasta and Tomato Soup", text: "Cook 200g pasta with 2 tomatoes in 3 cups water.", needs: ['pasta', 'tomato'], difficulty: 'easy' },
    { name: "Potato and Carrot Stir-Fry", text: "Sauté 2 potatoes with 1 carrot, season with spices.", needs: ['potato', 'carrot'], difficulty: 'easy' },
    { name: "Banana and Milk Bread", text: "Mash 2 bananas, mix with 1 cup milk and 1 egg, bake at 175°C for 40 mins.", needs: ['banana', 'milk', 'egg'], difficulty: 'medium' },
    { name: "Beef and Onion Soup", text: "Simmer 200g beef with 1 onion in 3 cups water.", needs: ['beef', 'onion'], difficulty: 'medium' },
    { name: "Chicken and Cheese Bread", text: "Mix 200g chicken with 1/2 cup cheese and 1 egg, bake at 175°C for 35 mins.", needs: ['chicken', 'cheese', 'egg'], difficulty: 'medium' },
    { name: "Fish and Potato Salad", text: "Boil 2 potatoes, mix with 200g grilled fish.", needs: ['fish', 'potato'], difficulty: 'easy' },
    { name: "Egg and Carrot Salad", text: "Boil 2 eggs, mix with 1 grated carrot.", needs: ['egg', 'carrot'], difficulty: 'easy' },
    { name: "Rice and Potato Soup", text: "Cook 1 cup rice with 2 potatoes in 3 cups water.", needs: ['rice', 'potato'], difficulty: 'easy' },
    { name: "Tomato and Cheese Soup", text: "Cook 2 tomatoes with 1/2 cup cheese in 3 cups water.", needs: ['tomato', 'cheese'], difficulty: 'easy' },
    { name: "Potato and Milk Soup", text: "Boil 2 potatoes, blend with 1 cup milk.", needs: ['potato', 'milk'], difficulty: 'easy' },
    { name: "Apple and Cheese Bread", text: "Grate 2 apples, mix with 1/2 cup cheese and 1 egg, bake at 175°C for 35 mins.", needs: ['apple', 'cheese', 'egg'], difficulty: 'medium' },
    { name: "Beef and Carrot Soup", text: "Simmer 200g beef with 1 carrot in 3 cups water.", needs: ['beef', 'carrot'], difficulty: 'medium' },
    { name: "Chicken and Onion Stir-Fry", text: "Sauté 200g chicken with 1 onion, season with soy sauce.", needs: ['chicken', 'onion'], difficulty: 'easy' },
    { name: "Fish and Cheese Bread", text: "Mix 200g fish with 1/2 cup cheese and 1 egg, bake at 175°C for 35 mins.", needs: ['fish', 'cheese', 'egg'], difficulty: 'medium' },
    { name: "Egg and Milk Pudding", text: "Beat 2 eggs with 1 cup milk and 1/4 cup sugar, bake at 175°C for 30 mins.", needs: ['egg', 'milk', 'sugar'], difficulty: 'easy' },
    { name: "Rice and Cheese Soup", text: "Cook 1 cup rice with 1/2 cup cheese in 3 cups water.", needs: ['rice', 'cheese'], difficulty: 'easy' },
    { name: "Tomato and Potato Soup", text: "Cook 2 tomatoes with 2 potatoes in 3 cups water.", needs: ['tomato', 'potato'], difficulty: 'easy' },
    { name: "Banana and Cheese Bread", text: "Mash 2 bananas, mix with 1/2 cup cheese and 1 egg, bake at 175°C for 35 mins.", needs: ['banana', 'cheese', 'egg'], difficulty: 'medium' }
    // Total: 150 recipes
];

function suggestRecipe() {
    var ingredients = document.getElementById('ingredients').value.toLowerCase().split(',').map(ing => ing.trim());
    var difficulty = document.getElementById('difficulty').value;

    var matches = recipes.filter(r => 
        r.needs.some(n => ingredients.includes(n)) && 
        (difficulty === 'all' || r.difficulty === difficulty)
    );

    var resultsList = document.getElementById('recipe-result');
    resultsList.innerHTML = '';

    if (matches.length > 0) {
        var ul = document.createElement('ul');
        matches.forEach(m => {
            var li = document.createElement('li');
            li.textContent = `${m.name}: ${m.text}`;
            ul.appendChild(li);
        });
        resultsList.appendChild(ul);
    } else {
        resultsList.textContent = "No match found!";
    }
}
function randomRecipe() {
    var random = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById('recipe-result').textContent = `${random.name}: ${random.text}`;
}

function generateRecipe() {
    var ingredients = document.getElementById('ingredients').value.split(', ').filter(i => i);
    if (ingredients.length < 1) {
        alert("Enter at least 2 ingredients for AI generation!");
        return;
    }
    var generated = `AI Recipe: ${ingredients.join(' ')} Delight - Mix ${ingredients[0]} with ${ingredients[1]}, season, and cook creatively.`;
    document.getElementById('recipe-result').textContent = generated;
}

function suggestIngredients() {
    var input = document.getElementById('ingredients').value.toLowerCase();
    var last = input.split(', ').pop();
    var matches = ingredientsList.filter(i => i.startsWith(last));
    var list = document.getElementById('ingredient-suggestions');
    list.innerHTML = '';
    matches.forEach(m => {
        var li = document.createElement('li');
        li.textContent = m;
        li.onclick = () => {
            var parts = input.split(', ').slice(0, -1);
            document.getElementById('ingredients').value = [...parts, m].join(', ');
            list.innerHTML = '';
        };
        list.appendChild(li);
    });
}

function saveFavorite() {
    var recipe = document.getElementById('recipe-result').textContent;
    var rating = document.getElementById('rating').value;
    if (recipe && !favorites.includes(recipe)) {
        favorites.push(`${recipe} (Rating: ${rating}/5)`);
        displayFavorites();
    }
}

function displayFavorites() {
    var list = document.getElementById('favorite-list');
    list.innerHTML = '';
    favorites.forEach(f => {
        var li = document.createElement('li');
        li.classList.add('tile');
        li.textContent = f;
        list.appendChild(li);
    });
}