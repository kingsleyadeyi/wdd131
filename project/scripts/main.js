/* ==========================================================
   BOM JOURNEY
   MAIN JAVASCRIPT
   WDD 131
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    updateFooterYear();
    highlightCurrentPage();

});

/* ==========================================================
   FOOTER YEAR
========================================================== */

function updateFooterYear() {

    const year = new Date().getFullYear();

    document.querySelectorAll(".current-year").forEach(element => {
        element.textContent = year;
    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function highlightCurrentPage() {

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

}