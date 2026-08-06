/* ==========================================================
   BOM JOURNEY
   JOURNEY PAGE
   WDD 131
========================================================== */

const TOTAL_CHAPTERS = 239;

document.addEventListener("DOMContentLoaded", () => {

    loadJourney();

});

/* ==========================================================
   LOAD JOURNEY
========================================================== */

function loadJourney() {

    const passport = JSON.parse(
        localStorage.getItem("bomPassport")
    );

    if (!passport) {
        return;
    }

    document.getElementById("welcomeName").textContent =
        `Welcome, ${passport.name}!`;

    document.getElementById("journeyGoal").textContent =
        passport.goal;

    document.getElementById("journeyBook").textContent =
        passport.favoriteBook;

    updateReadingProgress();

}
/* ==========================================================
   UPDATE READING PROGRESS
========================================================== */

function updateReadingProgress() {

    const completedChapters = JSON.parse(
        localStorage.getItem("completedChapters")
    ) || [];

    const completed = completedChapters.length;

    const percentage = Math.round(
        (completed / TOTAL_CHAPTERS) * 100
    );

    updateProgressDisplay(
        completed,
        percentage
    );

}
/* ==========================================================
   UPDATE PROGRESS DISPLAY
========================================================== */

function updateProgressDisplay(completed, percentage) {

    const progressBar =
        document.getElementById("readingProgress");

    const progressText =
        document.getElementById("progressPercent");

    const journeyStatus =
        document.getElementById("journeyStatus");

    if (progressBar) {

        progressBar.max = TOTAL_CHAPTERS;
        progressBar.value = completed;

    }

    if (progressText) {

        progressText.textContent =
            `${completed} of ${TOTAL_CHAPTERS} chapters (${percentage}%)`;

    }

    if (journeyStatus) {

        if (completed >= TOTAL_CHAPTERS) {

            journeyStatus.textContent =
                "Journey Completed 🎉";

        } else {

            journeyStatus.textContent =
                `Reading Progress: ${completed}/${TOTAL_CHAPTERS} Chapters`;

        }

    }

}