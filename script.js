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
    
    // Function to generate random lunch
    function generateRandomLunch() {
        // Remove fade-in class if it exists
        lunchDisplay.classList.remove('fade-in');
        
        // Get a random lunch option
        const randomIndex = Math.floor(Math.random() * lunchMenu.length);
        const selectedLunch = lunchMenu[randomIndex];
        
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