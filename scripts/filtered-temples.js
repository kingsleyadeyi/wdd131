// -------------------------------
// Hamburger Menu
// -------------------------------

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.textContent = navigation.classList.contains("open")
        ? "✖"
        : "☰";
});


// -------------------------------
// Footer
// -------------------------------

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// -------------------------------
// Temple Data
// -------------------------------

const temples = [

  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba_nigeria_temple_lds.webp"
  },

  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, United States",
    dedicated: "1999, January, 9",
    area: 30625,
    imageUrl: "images/anchorage_temple_lds.webp"
  },

  {
    templeName: "Apia Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "images/apia_samoa_temple_lds.webp"
  },

  {
    templeName: "Asuncion Paraguay",
    location: "Asuncion, Paraguay",
    dedicated: "2002, May, 19",
    area: 10700,
    imageUrl: "images/asuncion_paraguay_temple_lds.webp"
  },

  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia, United States",
    dedicated: "1983, June, 1",
    area: 37000,
    imageUrl: "images/atlanta_temple_lds.webp"
  },

  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48500,
    imageUrl: "images/bangkok_thailand_temple.webp"
  },

  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25300,
    imageUrl: "images/barranquilla_colombia_temple.webp"
  },

  {
    templeName: "Belem Brazil",
    location: "Belem, Brazil",
    dedicated: "2012, June, 22",
    area: 28700,
    imageUrl: "images/belem_brazil_temple.webp"
  },

  {
    templeName: "Billings Montana",
    location: "Billings, Montana, United States",
    dedicated: "1999, November, 20",
    area: 33000,
    imageUrl: "images/billings_temple_lds.webp"
  }

];


// -------------------------------
// Display Temples
// -------------------------------

const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {

    gallery.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("figure");

        card.innerHTML = `
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">

            <figcaption>
                <h3>${temple.templeName}</h3>

                <p><strong>Location:</strong> ${temple.location}</p>

                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        gallery.appendChild(card);

    });

}


// Display all temples initially
displayTemples(temples);


// -------------------------------
// Navigation Filters
// -------------------------------

document.querySelector("#home").addEventListener("click", () => {

    document.querySelector("#pageTitle").textContent = "Home";

    displayTemples(temples);

});


document.querySelector("#old").addEventListener("click", () => {

    document.querySelector("#pageTitle").textContent = "Old Temples";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) < 1900
        )
    );

});


document.querySelector("#new").addEventListener("click", () => {

    document.querySelector("#pageTitle").textContent = "New Temples";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) > 2000
        )
    );

});


document.querySelector("#large").addEventListener("click", () => {

    document.querySelector("#pageTitle").textContent = "Large Temples";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );

});


document.querySelector("#small").addEventListener("click", () => {

    document.querySelector("#pageTitle").textContent = "Small Temples";

    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );

});