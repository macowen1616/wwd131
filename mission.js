const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('footer img');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';  // Assuming you have a white version for dark theme
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);

