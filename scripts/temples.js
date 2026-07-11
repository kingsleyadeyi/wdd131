// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Toggle the menu when the hamburger button is clicked
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    // Change the hamburger icon to an X and back
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Display the current year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Display the last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;