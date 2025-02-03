// 🟢 Function with Parameters and Return Values
function calculateArea(width, height) {
    return width * height;
}

// Getting user input for area calculation
function getRectangleArea() {
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    let height = parseFloat(prompt("Enter the height of the rectangle:"));
    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
        alert("The area of the rectangle is: " + calculateArea(width, height) + " square units.");
    } else {
        alert("Please enter valid numbers.");
    }
}

// 🟢 Function Demonstrating Scope
let globalVariable = "I am a global variable";

function scopeExample() {
    let localVariable = "I am a local variable";
    console.log(globalVariable);
    console.log(localVariable);
}

// 🟢 Function to Toggle Modal Animation
function toggleModal() {
    let modal = document.getElementById("modal");
    modal.classList.toggle("active");
}

// 🟢 Function to Toggle Spinner Animation
function toggleSpinner() {
    let spinner = document.getElementById("spinner");
    spinner.style.display = spinner.style.display === "none" ? "block" : "none";
}

// 🟢 Function to Trigger Banner Animation
function startBannerAnimation() {
    let banner = document.getElementById("banner");
    banner.classList.toggle("hidden");
}
