// Buttons Variables
const tomBtn = document.getElementById("tomato");
const letBtn = document.getElementById("lettuce");
const spinBtn = document.getElementById("spinach");
const cucBtn = document.getElementById("cucumber");
const pepBtn = document.getElementById("peppers");
const thyBtn = document.getElementById("thyme");
const dillBtn = document.getElementById("dill");
const sageBtn = document.getElementById("sage");
const roseBtn = document.getElementById("rosemary");

// Copied and pasted from w3 schools
// Get the Modal
const tomModal = document.getElementById("tom-modal");
const letModal = document.getElementById("let-modal");
const spinModal = document.getElementById("spin-modal");
const cucModal = document.getElementById("cuc-modal");
const pepModal = document.getElementById("pep-modal");
const thyModal = document.getElementById("thy-modal");
const dillModal = document.getElementById("dill-modal");
const sageModal = document.getElementById("sage-modal");
const roseModal = document.getElementById("rose-modal");

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
thyBtn.onclick = function () {
  thyModal.style.display = "block";
}
dillBtn.onclick = function () {
  dillModal.style.display = "block";
}
sageBtn.onclick = function () {
  sageModal.style.display = "block";
}
roseBtn.onclick = function () {
  roseModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  tomModal.style.display = "none";
  letModal.style.display = "none";
  spinModal.style.display = "none";
  cucModal.style.display = "none";
  pepModal.style.display = "none";
  thyModal.style.display = "none";
  dillModal.style.display = "none";
  sageModal.style.display = "none";
  roseModal.style.display = "none";
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
  if (event.target == thyModal) {
    thyModal.style.display = "none";
  }
  if (event.target == dillModal) {
    dillModal.style.display = "none";
  }
  if (event.target == sageModal) {
    sageModal.style.display = "none";
  }
  if (event.target == roseModal) {
    roseModal.style.display = "none";
  }
};
