// Buttons Variables
const tomBtn = document.getElementById("tomato");
const letBtn = document.getElementById("lettuce");
const spinBtn = document.getElementById("spinach");
const cucBtn = document.getElementById("cucumber");
const pepBtn = document.getElementById("peppers");

const thymeButton = document.getElementById("thyme");
const dillButton = document.getElementById("dill");
const sageButton = document.getElementById("sage");
const rosemaryButton = document.getElementById("rosemary");

// Copied and pasted from w3 schools
// Get the Modal
const tomModal = document.getElementById("tom-modal");
const letModal = document.getElementById("let-modal");
const spinModal = document.getElementById("spin-modal");
const cucModal = document.getElementById("cuc-modal");
const pepModal = document.getElementById("pep-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
tomBtn.onclick = function () {
  tomModal.style.display = "block";
};
letBtn.onclick = function () {
  letModal.style.display = "block";
}
spinBtn.onclick = function () {
  spinModal.style.display = "block";
}
cucBtn.onclick = function () {
  cucModal.style.display = "block";
}
pepBtn.onclick = function () {
  pepModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  tomModal.style.display = "none";
  letModal.style.display = "none";
  spinModal.style.display = "none";
  cucModal.style.display = "none";
  pepModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == tomModal) {
    tomModal.style.display = "none";
  }
  if (event.target == letModal) {
    letModal.style.display = "none";
  }
  if (event.target == spinModal) {
    spinModal.style.display = "none";
  }
  if (event.target == cucModal) {
    cucModal.style.display = "none";
  }
  if (event.target == pepModal) {
    pepModal.style.display = "none";
  }
};
