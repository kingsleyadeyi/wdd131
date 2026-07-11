// Select the HTML elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add a chapter when the button is clicked
button.addEventListener("click", function () {

    // Make sure the input isn't blank
    if (input.value.trim() !== "") {

        // Create the list item
        const li = document.createElement("li");

        // Create the delete button
        const deleteButton = document.createElement("button");

        // Set the chapter name
        li.textContent = input.value;

        // Configure the delete button
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", `Remove ${input.value}`);
        deleteButton.classList.add("delete");

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the list
        list.append(li);

        // Delete the chapter when ❌ is clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input
        input.value = "";

        // Put the cursor back in the input
        input.focus();
    } else {
        // If the input is blank, just return the cursor
        input.focus();
    }
});