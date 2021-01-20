//make a fetch call to the API, save the data
fetch("/api/plants")
  .then((response) => response.json())
  .then((plantdata) => {
    //console log the results
    console.log(plantdata);
    //console log the results with parameters
    console.log(plantdata[0].plant_facts);
    //narrow parameters further
    for (let i = 0; i < plantdata.length; i++) {
      // create variables
      let plantFacts = plantdata[i].plant_facts;
      let plantName = plantdata[i].plant_name;
      let daysToMaturity = plantdata[i].days_to_maturity;
      let sun = plantdata[i].sun;

      // test variables
      // console.log(plantName);
      console.log(plantFacts);
      // console.log(daysToMaturity)
      console.log(`${plantName} is a plant for your garden and it takes ${daysToMaturity} days to mature and it needs ${sun}`);
    }
  });

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
const modal = document.getElementById("modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
tomBtn.onclick = () => {
  modal.style.display = "block";
};
letBtn.onclick = () => {
  modal.style.display = "block";
};
spinBtn.onclick = () => {
  modal.style.display = "block";
};
cucBtn.onclick = () => {
  modal.style.display = "block";
};
pepBtn.onclick = () => {
  modal.style.display = "block";
};
thyBtn.onclick = () => {
  modal.style.display = "block";
};
dillBtn.onclick = () => {
  modal.style.display = "block";
};
sageBtn.onclick = () => {
  modal.style.display = "block";
};
roseBtn.onclick = () => {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
