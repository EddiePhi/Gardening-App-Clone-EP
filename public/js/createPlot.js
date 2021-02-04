$(document).ready(function () {
  //EVENT LISTENERS

  //converted from Note Taker
  // const $plotName = $(".plot-name") verify with line 21
  const $plotNameInput = $("#plotNameInput")
  const $plotRows = $("#rowInput");
  const $plotColumns = $("#columnInput");
  const $savePlotBtn = $("#updatePlant")
  // const $newPlotBtn = $(".new-note");
  const $plotList = $(".list-container .list-group");

  // activePlot is used to keep track of the plot in the page
  let activePlot = {};

  //Custom
  
  // const $plotNameInput = $("#plotNameInput");
  // const $columnInput = $("#columnInput");
  // const $rowInput = $("#rowInput");
  // const $updatePlant = $("#updatePlant");
  const $plotName = $("#plotName");
  const $modal = $("#plotModal");
  const $createPlot = $("#createPlot");
  const $close = $(".close");
  
  
  const $plotTable = $("#plotTable");
  const $makePlot = $("#makePlot");
  const $plantChoiceModal = $("#plantChoiceModal");
  
  const $generated = $(".generated");
  const $plantTypeInput = $("#plantTypeInput");
  const $sowDateInput = $("#sowDateInput");
  const $noteInput = $("#noteInput");

  const $asparagusImg = $("#asparagusImg");
  const $tomatoImg = $("#tomatoImg");
  const $lotusImg = $("#lotusImg");
  const $lettuceImg = $("#lettuceImg");
  
  const $chosenPlant = $(".chosen");
  let plant;
  let cell;

  //HIDE TABLE ON LAUNCH
  $plotTable.hide();

  // A function for getting all notes from the db
  const getPlots = () => {
    return $.ajax({
      url: "/api/plots",
      method: "GET",
    });
  };

  //FUNCTION FOR SAVING PLOT TO DATABASE
  const savePlot = (plot) => {
    return $.ajax({
      url: "/api/plots",
      data: plot,
      method: "POST",
    });
  }

  // A function for deleting a note from the db
  const deletePlot = (id) => {
    return $.ajax({
      url: "api/plots/" + id,
      method: "DELETE",
    });
  };

  //NOTE TAKER CONVERSION//////////////////////////////////////////




  // If there is an activePlot, display it, otherwise render empty inputs
  const renderActivePlot = () => {
    // $savePlotBtn.hide();


    // if (activePlot.id) {
    //   $plotNameInput.attr("readonly", true);
    //   $plotRows.attr("readonly", true);
    //   $plotColumns.attr("readonly", true)
    //   $plotNameInput.val(activePlot.plot_name);
    //   $plotRows.attr(activePlot.plot_rows)
    //   $plotColumns.attr(activePlot.plot_columns)
    // } else {
    //   $plotNameInput.attr("readonly", false);
    //   $plotRows.attr("readonly", false);
    //   $plotColumns.attr("readonly", false);
    //   $plotNameInput.val("");
    //   $plotRows.val("");
    //   $plotColumns.val("");
    // }


  };

  // IMPORTANT BIT, REVIEW LATER
  // Get the note data from the inputs, save it to the db and update the view
  // const handlePlotSave = function () {
  //   const newPlot = {
  //     plot_name: $plotNameInput.val(),
  //     plot_rows: $plotRows.val(),
  //     plot_columns: $plotColumns.val(),
  //   };

  //   savePlot(newPlot).then(() => {
  //     getAndRenderPlots();
  //     renderActivePlot();
  //   });
  // };

  // Delete the clicked note
  const handlePlotDelete = function (event) {
    // prevents the click listener for the list from being called when the button inside of it is clicked
    event.stopPropagation();

    const plot = $(this).parent(".list-group-item").data();

    if (activePlot.id === plot.id) {
      activePlot = {};
    }

    deletePlot(plot.id).then(() => {
      getAndRenderPlots();
      renderActivePlot();
    });
  };

  // Sets the activeNote and displays it
  const handlePlotView = function () {
    activePlot = $(this).data();
    renderActivePlot();
  };

  // Sets the activeNote to and empty object and allows the user to enter a new note
  const handleNewPlotView = function () {
    activePlot = {};
    renderActivePlot();
  };

  // If a note's title or text are empty, hide the save button
  // Or else show it
  // const handleRenderSaveBtn = function () {
  //   if (!$plotNameInput.val().trim() || !$plotNameInput.val().trim()) {
  //     $savePlotBtn.hide();
  //   } else {
  //     $savePlotBtn.show();
  //   }
  // };

  //RENDERS LIST WITH PLOT NAMES
  const renderPlotList = (plots) => {
    console.log(plots);
    $plotList.empty();
      // container div and ul

    const plotListItems = [];

    // Returns jquery object for li with given text and delete button
    // unless withDeleteButton argument is provided as false
    const create$li = (text, withDeleteButton = true) => {
      const $li = $("<li class='list-group-item'>");
      const $span = $("<span>").text(text);
      $li.append($span);

      // Need different icon from Bulma
      if (withDeleteButton) {
        const $delBtn = $(
          "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
        );
        $li.append($delBtn);
      }
      return $li;
    };

    if (plots.length === 0) {
      plotListItems.push(create$li("No saved Plots", false));
    }

    plots.forEach((plot) => {
      const $li = create$li(plot.plot_name).data(plot);
      plotListItems.push($li);
    });

    $plotList.append(plotListItems);
  }


  // Gets plots from the db and renders them to the right sidebar
  const getAndRenderPlots = () => {
    return getPlots().then(renderPlotList);
  };

  








  //CONVERSION END//////////////////////////////////////////


  //POPULATE PLOT FUNCITON
  function populatePlot(){
    $plotTable.show();
    var num_rows = activePlot.plot_rows;
    var num_cols = activePlot.plot_columns;

    var theader = '<table border="1">\n';
    var tbody = "";

    //CREATE TABLE FOR PLOT BASED ON USER INPUT
    for (var i = 0; i < num_rows; i++) {
      tbody += "<tr>";
      for (var j = 0; j < num_cols; j++) {
        tbody += "<td>";
        //tbody +=
        //"<img src=https://img.icons8.com/cotton/64/000000/lotus--v1.png>";
        tbody += "</td>";
      }
      tbody += "</tr>\n";
    }
    var tfooter = "</table>";
    document.getElementById("plotTable").innerHTML = theader + tbody + tfooter;

    //ADD PLOT TITLE
    $plotName.text(activePlot.plot_name);
  };


  //CREATE PLOT FUNCTION
  function createPlot() {
    $plotRows.empty();
    $plotColumns.empty();
    $plotNameInput.empty();
    $plotTable.show();
    var num_rows = $plotRows.val();
    var num_cols = $plotColumns.val();

    var theader = '<table border="1">\n';
    var tbody = "";

    //CREATE TABLE FOR PLOT BASED ON USER INPUT
    for (var i = 0; i < num_rows; i++) {
      tbody += "<tr>";
      for (var j = 0; j < num_cols; j++) {
        tbody += "<td>";
        //tbody +=
        //"<img src=https://img.icons8.com/cotton/64/000000/lotus--v1.png>";
        tbody += "</td>";
      }
      tbody += "</tr>\n";
    }
    var tfooter = "</table>";
    document.getElementById("plotTable").innerHTML = theader + tbody + tfooter;

    //ADD PLOT TITLE
    $plotName.text($plotNameInput.val());
  }

  //ATTEMPT TO CHANGE TABLE DATA COLOR
  $("#plotTable").on("click", "td", function () {
    alert(
      "My position in table is: " +
        this.cellIndex +
        "x" +
        this.parentNode.rowIndex
    );
  });

  //OPENS PLANT CHOICE MODAL DATA
  $("#plotTable").on("click", "td", (e) => {
    console.log(e.currentTarget);
    cell = $(e.currentTarget);
    $plantChoiceModal.addClass("is-active");
  });

  //HIGHLIGHTS ONE PLANT
  $(".plant_img").on("click", function () {
    console.log($(this));
    console.log(cell.children.length);
    cell.empty();
    $(this).clone().appendTo(cell);
    $(".plant_img").removeClass("chosen");
    $(this).addClass("chosen");
  });

  //SAVE NEW PLOT
  const handlePlotSave = function () {
    //TURN DATA INTO OBJECT
    const newPlot = {
      plot_name: $plotNameInput.val(),
      plot_rows: $plotRows.val(),
      plot_columns: $plotColumns.val(),
    };
    savePlot(newPlot).then(function (plots) {
      // renderPlotList(plots);
      
      console.log("Success");
    });
  }

  //SAVE NEW PLANT DATA
  function newPlantData() {
    //TURN DATA INTO OBJECT
    const newPlant = {
      plant_type: $plantTypeInput.val(),
      sow_date: $sowDateInput.val(),
      notes_input: $noteInput.val(),
      //xCoordinate: this.cellIndex,
      //yCoordinate: this.rowIndex,
      //chosenPlantIcon: $(".chosen"),
    };
    addPlant(newPlant).then(function (plant) {
      renderActivePlot(plant);
      
      console.log(plant);
    });
  }



  //SAVES PLANT DATA AS OBJECT
  $savePlotBtn.click(function (plots) {
    $(this).addClass("updated");
    newPlantData();
    // renderPlotList(plots);
    //$plantTypeInput.val();
  });

  //WHEN CREATE PLOT BUTTON IS CLICKED OPEN CREATE PLOT MODAL
  $createPlot.click(function () {
    $modal.addClass("is-active");
  });

  //CLOSE CREATE PLOT MODEL
  $close.click(function () {
    $modal.removeClass("is-active");
    $plantChoiceModal.removeClass("is-active");
  });

  //OPEN PLOT
  $makePlot.click(function (plots) {
    $modal.removeClass("is-active");
    createPlot();
    handlePlotSave();
    // renderPlotList(plots);
    getAndRenderPlots();
  });

  //FUNCTION FOR SAVING PLANT TO PLOT LOCATION
  function addPlant(plant) {
    return $.ajax({
      url: "/api/plot/update/:plot_name",
      data: plant,
      method: "POST",
    });
  }

  

  // //FUNCTION FOR GETTING PLOTS FROM DATABASE
  // function getPlot(plotName) {
  //   $.get("/api/plot/" + plotName).then(function (response) {
  //     console.log(response);
  //     console.log("GOT RESPONSE ^^^");
  //   });
  // }
  // getPlot();

  //WEATHER ICON AND CURRENT DATE GET REQUEST
  $.get("/api/currentweather/1").then(function (response) {
    console.log(response);
    let currentWeatherIcon = response.weather[0].icon;
    $("#currentWeatherImg").html(
      `<img id="icon" class="pixelate level-item mr-3" style="height: 40px;" alt="weather-icon" src="https://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png"/>`
    );
  });
  $("#currentDateTime").text(dayjs().format("ddd. MMM DD, YYYY"));

  /*
  //ADDS PLANT IMAGE TO CELL
  $("#updatePlant").click(function () {
    // Grab the needed info from then Chosen Class element
    let body = {
      chosenPlantIcon: $(".chosen")[0],
    };
    // This is the api Call

    addPlant(body).then(function (plantImg) {
      console.log(plantImg);
    });
  });
  */

  //Returns jquery object for li with given text and delete button
  //unless withDeleteButton argument is provided as false
  /*function create$li(text) {
  const $li = $("<li class='list-group-item'>");
   const $span = $("<span>").text(text);
   $li.append($span);
*/
  /*
          if (withDeleteButton) {
            const $delBtn = $(
              "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
            );
            $li.append($delBtn);
          }
          return $li;
          */
  // }

  // if (notes.length === 0) {
  //   noteListItems.push(create$li("No saved Notes"));
  // }

  // notes.forEach(function (note) {
  //   const $li = create$li(note.name).data(note);
  //   plotListItems.push($li);
  //   console.log(plotListItems);
  // });

  // $noteList.append(noteListItems);
  // }

  // $generated.click(retrievePlot());

  // $generated.innerText
  // function retrievePlot(){
  //   let getPlotName = $(this).val();
  //   console.log(getPlotName);
  //   console.log(getPlotName)
  //   // console.log("start");
  //    $.get("/api/plot/" + getPlotName, function(response){
  //     console.log(response);
  //    });

  //  .then(function(response){

  //   console.log(response)
  //       }
  //     }
  // };

  //LAST BIT OF CONVERSION/////////////////////////
  // $savePlotBtn.on("click", handlePlotSave);
  $plotList.on("click", ".list-group-item", handlePlotView);
  $plotList.on("click", ".list-group-item", populatePlot);
  // $newPlotBtn.on("click", handleNewPlotView);
  // $plotList.on("click", ".delete-note", handlePlotDelete);
  // $plotNameInput.on("keyup", handleRenderSaveBtn);
  // $plotRows.on("keyup", handleRenderSaveBtn);
  // $plotColumns.on("keyup", handleRenderSaveBtn);

  // Gets and renders the initial list of plots
  getAndRenderPlots();
});
