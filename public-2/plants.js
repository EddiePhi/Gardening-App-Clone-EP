// Buttons Variables
const tomBtn = document.getElementById("tomato");

const lettuceButton = document.getElementById("lettuce");
const spinachButton = document.getElementById("spinach");
const cucumberButton = document.getElementById("cucumber");
const peppersButton = document.getElementById("peppers");
const thymeButton = document.getElementById("thyme");
const dillButton = document.getElementById("dill");
const sageButton = document.getElementById("sage");
const rosemaryButton = document.getElementById("rosemary");

// Copied and pasted from w3 schools
// Get the Modal
const modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
tomBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
