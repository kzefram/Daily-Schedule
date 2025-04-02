// Get current date and display it
const currentDate = new Date().toLocaleDateString();
document.getElementById("currentDay").textContent = `Date: ${currentDate}`;

// Get current hour using Day.js
const currentHour = dayjs().hour();

// Function to set the time block colors
function setTimeBlockColors() {
  const timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach((block) => {
    const blockHour = parseInt(block.id.split("-")[1]);
    const descriptionInput = block.querySelector(".description");

    block.classList.remove("past", "present", "future");

    if (blockHour < currentHour) {
      block.classList.add("past");
    } else if (blockHour === currentHour) {
      block.classList.add("present");
    } else {
      block.classList.add("future");
    }
  });
}
setTimeBlockColors();

// Event listener for save buttons
const saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const timeBlockId = this.parentElement.id;
    const description = this.parentElement.querySelector(".description").value;
    localStorage.setItem(timeBlockId, description);
  });
});

// Event listener for delete buttons
const deleteButtons = document.querySelectorAll(".deleteBtn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const timeBlockId = this.parentElement.id;
    localStorage.removeItem(timeBlockId);
    const descriptionInput = this.parentElement.querySelector(".description");
    descriptionInput.value = ""; // Clear the textarea
  });
});

// Load saved data from localStorage
function loadSavedData() {
  const timeBlocks = document.querySelectorAll(".time-block");
  timeBlocks.forEach((block) => {
    const savedDescription = localStorage.getItem(block.id);
    const descriptionInput = block.querySelector(".description");
    if (savedDescription) {
      descriptionInput.value = savedDescription;
    }
  });
}
loadSavedData();
