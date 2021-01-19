let plantsBtn = $('#plants');
let forecastBtn = $('#forecast');
let settingsBtn = $('#settings');
let homeBtn = $('#home');

function goToPlants(){
    window.location.replace('/plants')
};
function goToForecast(){
    window.location.replace('/forecast')
};
function goToSettings(){
    window.location.replace('/settings')
};
function goToHome(){
    window.location.replace('/home')
};

plantsBtn.click(goToPlants);
forecastBtn.click(goToForecast);
settingsBtn.click(goToSettings);
homeBtn.click(goToHome);

