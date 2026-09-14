document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const foodIcon = document.querySelector('.food-icon');
    const foodName = document.querySelector('.food-name');
    const lunchDisplay = document.querySelector('.lunch-display');
    
    // Array of lunch options with corresponding Font Awesome icons
    const lunchMenu = [
        { name: "Pizza", icon: "fas fa-pizza-slice" },
        { name: "Sushi", icon: "fas fa-fish" },
        { name: "Burger", icon: "fas fa-hamburger" },
        { name: "Salad", icon: "fas fa-leaf" },
        { name: "Tacos", icon: "fas fa-utensil-spoon" },
        { name: "Ramen", icon: "fas fa-bowl-hot" },
        { name: "Sandwich", icon: "fas fa-bread-slice" },
        { name: "Pasta", icon: "fas fa-pasta" },
        { name: "Curry", icon: "fas fa-mortar-pestle" },
        { name: "Steak", icon: "fas fa-drumstick-bite" },
        { name: "Soup", icon: "fas fa-bowl" },
        { name: "BBQ", icon: "fas fa-fire" }
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
            foodIcon.innerHTML = `<i class="${selectedLunch.icon}"></i>`;
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