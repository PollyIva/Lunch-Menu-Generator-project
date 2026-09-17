document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const foodIcon = document.querySelector('.food-icon');
    const foodName = document.querySelector('.food-name');
    const lunchDisplay = document.querySelector('.lunch-display');
    
    // Array of lunch options paired with a Twemoji SVG image (assets/food/)
    const lunchMenu = [
        { name: "Pizza", img: "pizza.svg" },
        { name: "Sushi", img: "sushi.svg" },
        { name: "Burger", img: "burger.svg" },
        { name: "Salad", img: "salad.svg" },
        { name: "Tacos", img: "tacos.svg" },
        { name: "Ramen", img: "ramen.svg" },
        { name: "Sandwich", img: "sandwich.svg" },
        { name: "Pasta", img: "pasta.svg" },
        { name: "Curry", img: "curry.svg" },
        { name: "Steak", img: "steak.svg" },
        { name: "Soup", img: "soup.svg" },
        { name: "BBQ", img: "bbq.svg" }
    ];

    // Seconds a dish stays blocked after being recommended
    const cooldownSeconds = 30;
    // Last recommendation time per dish index (0 = never recommended)
    const lastRecommendedAt = new Array(lunchMenu.length).fill(0);
    
    // Function to generate random lunch
    function generateRandomLunch() {
        // Remove fade-in class if it exists
        lunchDisplay.classList.remove('fade-in');
        
        // Pick a random lunch option that was not recommended in the last cooldown
        const now = Date.now();
        let eligible = [];
        lunchMenu.forEach((dish, index) => {
            if (now - lastRecommendedAt[index] >= cooldownSeconds * 1000) {
                eligible.push(index);
            }
        });
        
        // If every dish is still cooling down, pick the least recently recommended one
        if (eligible.length === 0) {
            let oldestIndex = 0;
            for (let i = 1; i < lastRecommendedAt.length; i++) {
                if (lastRecommendedAt[i] < lastRecommendedAt[oldestIndex]) {
                    oldestIndex = i;
                }
            }
            eligible = [oldestIndex];
        }
        
        const randomIndex = eligible[Math.floor(Math.random() * eligible.length)];
        const selectedLunch = lunchMenu[randomIndex];
        lastRecommendedAt[randomIndex] = now;
        
        // Briefly show loading state
        foodIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        foodName.textContent = "Thinking...";
        
        // After a short delay, show the selected lunch
        setTimeout(() => {
            foodIcon.innerHTML = `<img src="assets/food/${selectedLunch.img}" alt="${selectedLunch.name}">`;
            foodName.textContent = selectedLunch.name;
            
            // Add animation class
            lunchDisplay.classList.add('fade-in');
        }, 500);
    }
    
    // Add click event to button
    generateBtn.addEventListener('click', generateRandomLunch);
    
    // Generate a random lunch on page load
    generateRandomLunch();
});