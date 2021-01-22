let plantsBtn = $('#plants');
let forecastBtn = $('#forecast');
let plotsBtn = $('#plots');
let homeBtn = $('#home');

function goToPlants(){
    window.location.replace('/plants')
};
function goToForecast(){
    window.location.replace('/forecast')
};
function goToPlots(){
    window.location.replace('/plots')
};
function goToHome(){
    window.location.replace('/home')
};

plantsBtn.click(goToPlants);
forecastBtn.click(goToForecast);
plotsBtn.click(goToPlots);
homeBtn.click(goToHome);

