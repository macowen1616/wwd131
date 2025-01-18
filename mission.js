// Select the theme dropdown from the DOM
const themeSelector = document.querySelector('#theme-selector');

// Function to handle theme changes
function changeTheme() {
    // Check the current value of the dropdown
    const selectedTheme = themeSelector.value;
    const body = document.body; // Select the body element
    const logo = document.querySelector('footer img'); // Select the logo image

    // If the selected theme is "dark"
    if (selectedTheme === 'dark') {
        body.classList.add('dark'); 
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark'); 
        logo.src = 'byui-logo_blue.webp'; 
    }
}

themeSelector.addEventListener('change', changeTheme);

