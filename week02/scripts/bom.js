// Select the HTML elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Get chapters from localStorage or create an empty array
let chaptersArray = getChapterList() || [];

// Display saved chapters when the page loads
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Add a chapter when the button is clicked
button.addEventListener("click", () => {

    if (input.value.trim() !== "") {

        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

        input.focus();

    } else {

        input.focus();

    }

});

// Function to display a chapter in the list
function displayList(item) {

    const li = document.createElement("li");

    const deleteButton = document.createElement("button");

    li.textContent = item;

    deleteButton.textContent = "❌";

    deleteButton.setAttribute("aria-label", `Remove ${item}`);

    deleteButton.classList.add("delete");

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener("click", () => {

        list.removeChild(li);

        deleteChapter(li.textContent);

        input.focus();

    });

}

// Save the array to localStorage
function setChapterList() {

    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));

}

// Retrieve the array from localStorage
function getChapterList() {

    return JSON.parse(localStorage.getItem("myFavBOMList"));

}

// Delete a chapter
function deleteChapter(chapter) {

    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter(item => item !== chapter);

    setChapterList();

}