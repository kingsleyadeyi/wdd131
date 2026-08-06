/* ==========================================================
   BOM JOURNEY
   SCRIPTURE READER
   Part 1
========================================================== */

/* ==========================================================
   BOOK MAPPING
========================================================== */

const books = {
    "1nephi": "1 Nephi",
    "2nephi": "2 Nephi",
    "jacob": "Jacob",
    "enos": "Enos",
    "jarom": "Jarom",
    "omni": "Omni",
    "wordsofmormon": "Words of Mormon",
    "mosiah": "Mosiah",
    "alma": "Alma",
    "helaman": "Helaman",
    "3nephi": "3 Nephi",
    "4nephi": "4 Nephi",
    "mormon": "Mormon",
    "ether": "Ether",
    "moroni": "Moroni"
};

/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let scriptureData = null;
let currentBook = null;
let currentChapter = null;

/* ==========================================================
   PAGE ELEMENTS
========================================================== */

const bookSelect = document.getElementById("bookSelect");
const chapterSelect = document.getElementById("chapterSelect");
const readButton = document.getElementById("readButton");

const chapterTitle = document.getElementById("chapterTitle");
const scriptureContent = document.getElementById("scriptureContent");

const completeButton =
    document.getElementById("completeChapter");

/* ==========================================================
   INITIAL PAGE STATE
========================================================== */

completeButton.disabled = true;

/* ==========================================================
   LOAD BOOK OF MORMON JSON
========================================================== */

async function loadScriptures() {

    try {

        const response = await fetch(
            "data/scriptures/book-of-mormon.json"
        );

        if (!response.ok) {

            throw new Error("Unable to load scripture data.");

        }

        scriptureData = await response.json();

        console.log("Book of Mormon loaded successfully.");

    } catch (error) {

        console.error(error);

        chapterTitle.textContent =
            "Unable to load scriptures.";

        scriptureContent.innerHTML =
            "<p>Please refresh the page and try again.</p>";

    }

}

/* ==========================================================
   START APPLICATION
========================================================== */

loadScriptures();
/* ==========================================================
   POPULATE CHAPTER LIST
========================================================== */

bookSelect.addEventListener("change", () => {

    completeButton.disabled = true;

    chapterTitle.textContent =
        "Scripture will appear here";

    scriptureContent.innerHTML =
        `<p>Select a chapter, then click
        <strong>Read Chapter</strong>.</p>`;

    chapterSelect.innerHTML =
        '<option value="">Select a Chapter</option>';

    const selectedBook = books[bookSelect.value];

    if (!scriptureData || !selectedBook) {
        return;
    }

    const book = scriptureData.books.find(
        b => b.book === selectedBook
    );

    if (!book) {
        return;
    }

    book.chapters.forEach(chapter => {

        const option =
            document.createElement("option");

        option.value = chapter.chapter;

        option.textContent =
            `Chapter ${chapter.chapter}`;

        chapterSelect.appendChild(option);

    });

});

/* ==========================================================
   READ SELECTED CHAPTER
========================================================== */

readButton.addEventListener("click", () => {

    if (!scriptureData) {

        alert(
            "Scriptures are still loading. Please wait a moment."
        );

        return;

    }

    currentBook = books[bookSelect.value];
    currentChapter = Number(chapterSelect.value);

    if (!currentBook || !currentChapter) {

        alert(
            "Please select both a book and chapter."
        );

        return;

    }

    const book = scriptureData.books.find(
        b => b.book === currentBook
    );

    if (!book) {

        alert("Book not found.");

        return;

    }

    const chapter = book.chapters.find(
        c => c.chapter === currentChapter
    );

    if (!chapter) {

        alert("Chapter not found.");

        return;

    }

    chapterTitle.textContent =
        chapter.reference;

    scriptureContent.innerHTML = "";

/* ==========================================================
   DISPLAY VERSES
========================================================== */

    chapter.verses.forEach(verse => {

        const paragraph =
            document.createElement("p");

        paragraph.innerHTML =
            `<strong>${verse.verse}</strong> ${verse.text}`;

        scriptureContent.appendChild(paragraph);

    });

    completeButton.disabled = false;

});
/* ==========================================================
   MARK CHAPTER AS READ
========================================================== */

completeButton.addEventListener("click", () => {

    if (!currentBook || !currentChapter) {

        alert("Please read a chapter first.");

        return;

    }

    if (hasCompletedChapter(currentBook, currentChapter)) {

        alert("You have already marked this chapter as read.");

        return;

    }

    saveCompletedChapter(currentBook, currentChapter);

    alert(`${currentBook} ${currentChapter} has been marked as read!`);

    completeButton.disabled = true;

});

/* ==========================================================
   PAGE INITIALIZATION
========================================================== */

window.addEventListener("load", () => {

    chapterTitle.textContent =
        "Scripture will appear here";

    scriptureContent.innerHTML = `
        <p>
            Select a Book, choose a Chapter,
            then click <strong>Read Chapter</strong>.
        </p>
    `;

});