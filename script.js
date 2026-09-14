document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const foodIcon = document.querySelector('.food-icon');
    const foodName = document.querySelector('.food-name');
    const lunchDisplay = document.querySelector('.lunch-display');
    
    // Array of lunch options paired with emoji (always render as pictures)
    const lunchMenu = [
        { name: "Pizza", icon: "🍕" },
        { name: "Sushi", icon: "🍣" },
        { name: "Burger", icon: "🍔" },
        { name: "Salad", icon: "🥗" },
        { name: "Tacos", icon: "🌮" },
        { name: "Ramen", icon: "🍜" },
        { name: "Sandwich", icon: "🥪" },
        { name: "Pasta", icon: "🍝" },
        { name: "Curry", icon: "🍛" },
        { name: "Steak", icon: "🥩" },
        { name: "Soup", icon: "🍲" },
        { name: "BBQ", icon: "🍖" }
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
            foodIcon.textContent = selectedLunch.icon;
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