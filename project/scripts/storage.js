/* ==========================================================
   BOM JOURNEY
   STORAGE
   WDD 131
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const passportForm = document.getElementById("passportForm");

    if (passportForm) {

        loadPassport();

        passportForm.addEventListener("submit", savePassport);

    }

});

/* ==========================================================
   SAVE PASSPORT
========================================================== */

function savePassport(event) {

    event.preventDefault();

    const name = document.getElementById("username").value.trim();

    const goal = document.getElementById("goal").value;

    const favoriteBook = document.getElementById("favoriteBook").value;

    const passport = {

        name,
        goal,
        favoriteBook,
        status: "Journey Started"

    };

    localStorage.setItem(
        "bomPassport",
        JSON.stringify(passport)
    );

    displayPassport(passport);

}
/* ==========================================================
   LOAD PASSPORT
========================================================== */

function loadPassport() {

    const storedPassport = localStorage.getItem("bomPassport");

    if (!storedPassport) {
        return;
    }

    const passport = JSON.parse(storedPassport);

    document.getElementById("username").value = passport.name;
    document.getElementById("goal").value = passport.goal;
    document.getElementById("favoriteBook").value = passport.favoriteBook;

    displayPassport(passport);

}

/* ==========================================================
   DISPLAY PASSPORT
========================================================== */

function displayPassport(passport) {

    document.getElementById("displayName").textContent =
        passport.name;

    document.getElementById("displayGoal").textContent =
        passport.goal;

    document.getElementById("displayBook").textContent =
        passport.favoriteBook;

    document.getElementById("displayStatus").textContent =
        passport.status;

}
/* ==========================================================
   CHAPTER PROGRESS
========================================================== */

function getCompletedChapters() {

    const completed =
        localStorage.getItem("completedChapters");

    return completed ? JSON.parse(completed) : [];

}

function saveCompletedChapter(book, chapter) {

    const completed = getCompletedChapters();

    const chapterId = `${book} ${chapter}`;

    if (!completed.includes(chapterId)) {

        completed.push(chapterId);

        localStorage.setItem(
            "completedChapters",
            JSON.stringify(completed)
        );

    }

}

function hasCompletedChapter(book, chapter) {

    const completed = getCompletedChapters();

    return completed.includes(`${book} ${chapter}`);

}