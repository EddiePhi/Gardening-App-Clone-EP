// Buttons Variables
// const plantBtn = document.getElementsByClassName("plant-button")
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
const modal = document.getElementById("modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
tomBtn.onclick = () => {
  modal.style.display = "block";
};
letBtn.onclick = () => {
  modal.style.display = "block";
}
spinBtn.onclick = () => {
  modal.style.display = "block";
}
cucBtn.onclick = () => {
  modal.style.display = "block";
}
pepBtn.onclick = () => {
  modal.style.display = "block";
}
thyBtn.onclick = () => {
  modal.style.display = "block";
}
dillBtn.onclick = () => {
  modal.style.display = "block";
}
sageBtn.onclick = () => {
  modal.style.display = "block";
}
roseBtn.onclick = () => {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
