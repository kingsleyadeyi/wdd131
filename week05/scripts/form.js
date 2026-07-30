// =========================================
// PRODUCT DATA
// =========================================

const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

// =========================================
// DOM ELEMENTS
// =========================================

const productSelect = document.querySelector("#product");
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

// =========================================
// POPULATE PRODUCT LIST
// =========================================

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.append(option);

});

// =========================================
// FOOTER
// =========================================

year.textContent = new Date().getFullYear();

lastModified.textContent = document.lastModified;