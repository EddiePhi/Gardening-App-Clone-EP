//make a fetch call to the API, save the data
fetch("http://localhost:8080/api/plants")
  .then((response) => response.json())
  .then((plantdata) => {
    //console log the results
    console.log(plantdata);
    //console log the results with parameters
    // console.log(plantdata[0].plant_facts);

    //narrow parameters further
    for (let i = 0; i < plantdata.length; i++) {
      // create variables
      let id = plantdata[i].id;
      let plantName = plantdata[i].plant_name;
      let plantFacts = plantdata[i].plant_facts;
      let daysToMaturity = plantdata[i].days_to_maturity;
      let fruitSize = plantdata[i].fruit_size_inches;
      let sun = plantdata[i].sun;
      let spread = plantdata[i].spread;
      let height = plantdata[i].height;

      // test variables
      // console.log(plantName);
      // console.log(plantFacts);
      // console.log(daysToMaturity)
      console.log(`${plantName} is a plant for your garden. ${plantFacts} ${plantName} takes ${daysToMaturity} days to mature and it needs ${sun}. Its fruit can grow to be ${fruitSize} inches and its spread is ${spread}. It can grow to be ${height} inches high.`);



    };
  });

  // <!-- MODAL TO BE DYNAMICALLY CREATED -->
  // <div class="modal" id="modal">
  //   <div class="modal-content">
  //     <span class="close">&times;</span>
  //     <h1>(Description description description description)</h1>
  //     <p>Sun: </p>
  //     <br>
  //     <p>Life cycle:</p>
  //     <br>
  //     <p>Spread:</p>
  //     <br>
  //     <p>Days to maturity:</p>
  //     <br>
  //     <p>Height:</p>
  //     <br>
  //     <p>Sow Method:</p>
  // </div>
  // </div>

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
