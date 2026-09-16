document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const foodIcon = document.querySelector('.food-icon');
    const foodName = document.querySelector('.food-name');
    const lunchDisplay = document.querySelector('.lunch-display');
    
    // Array of lunch options: Font Awesome icons (free set) or a downloaded SVG image
    const lunchMenu = [
        { name: "Pizza", faClass: "fa-pizza-slice" },
        { name: "Sushi", faClass: "fa-fish" },
        { name: "Burger", faClass: "fa-hamburger" },
        { name: "Salad", faClass: "fa-leaf" },
        { name: "Tacos", img: "icons/taco.svg" },
        { name: "Ramen", img: "icons/ramen.svg" },
        { name: "Sandwich", faClass: "fa-bread-slice" },
        { name: "Pasta", img: "icons/pasta.svg" },
        { name: "Curry", faClass: "fa-mortar-pestle" },
        { name: "Steak", faClass: "fa-drumstick-bite" },
        { name: "Soup", img: "icons/soup.svg" },
        { name: "BBQ", faClass: "fa-fire" }
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
            if (selectedLunch.faClass) {
                foodIcon.innerHTML = `<i class="fas ${selectedLunch.faClass}"></i>`;
            } else {
                foodIcon.innerHTML = `<img src="${selectedLunch.img}" alt="${selectedLunch.name}">`;
            }
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