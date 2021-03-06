$(document).ready(function () {
  //EVENT LISTENERS

  //converted from Note Taker
  // const $plotName = $(".plot-name") verify with line 21
  const $plotNameInput = $("#plotNameInput")
  const $plotRows = $("#rowInput");
  const $plotColumns = $("#columnInput");
  const $savePlotBtn = $("#updatePlant")
  const $plotList = $(".list-container .list-group");

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
  let div;

  //HIDE TABLE ON LAUNCH
  // $plotTable.hide();



                    /////////////////// API REQUESTS ///////////////////

  // WORKS FOR JSON FILE - A function for getting all notes from the db
  const getPlots = () => {
    return $.ajax({
      url: "/api/plot",
      method: "GET",
    });
  };

  //FUNCTION FOR SAVING PLOT TO DATABASE
  const savePlot = (plot) => {
    return $.ajax({
      url: "/api/plot",
      data: plot,
      method: "POST",
    });
  }

  // A function for deleting a note from the db
  const deletePlot = (id) => {
    return $.ajax({
      url: "api/plot/" + id,
      method: "DELETE",
    });
  };
                    /////////////////// API REQUESTS (END) ///////////////////



                    /////////////////// WORKING ///////////////////

  // CONSOLE.LOG PLOTS DB TO TEST
  const consoleLogDB = () => {
    return getPlots().then((response) => {
      console.log(response)
    })
  };

  //RENDERS LIST WITH PLOT NAMES ON RIGHT SIDE
  const renderPlotList = () => {
    return getPlots().then((response) => {
      console.log("start")
      console.log(response);
      console.log("end")

      currentPlotList = response;
      currentPlotList.push("test push")
      console.log(currentPlotList);

      $plotList.empty();
      // container div and ul

      const plotListItems = [];

      // Returns jquery object for li with given text and delete button
      // unless withDeleteButton argument is provided as false
      const create$li = (text, withDeleteButton = true) => {
        const $li = $("<li class='list-group-item'>");
        const $btn = $("<button>").text(text);
        $btn.attr("class", "popBtn")
        $li.append($btn);

        // Need different icon from Bulma
        if (withDeleteButton) {
          const $delBtn = $(
            // "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
            "<p>Delete</p>"
          );
          $li.append($delBtn);
        }
        return $li;
      };

      if (currentPlotList.length === 0) {
        plotListItems.push(create$li("No saved Plots", false));
      }

      currentPlotList.forEach((plot) => {
        const $li = create$li(plot.plot_name).data(plot);
        plotListItems.push($li);
      });

      $plotList.append(plotListItems);
    })
  }


  

  const dragNDrop = () => {
    let dragLastPlace;
    let movedLastPlace;


    $('.draggable').draggable({
    placeholder: 'placeholder',
    zIndex: 1000,
    containment: 'table',
    helper: function(evt) {
        let that = $(this).clone().get(0);
        $(this).hide();
        return that;
    },
    start: function(evt, ui) {
        dragLastPlace = $(this).parent();
    },
    cursorAt: {
        top: 20,
        left: 20
    }
    });

    $('.droppable').droppable({
    hoverClass: 'placeholder',
    drop: function(evt, ui) {
        let draggable = ui.draggable;
        let droppable = this;

        if ($(droppable).children('.draggable:visible:not(.ui-draggable-dragging)').length > 0) {
        $(droppable).children('.draggable:visible:not(.ui-draggable-dragging)').detach().prependTo(dragLastPlace);
        }

        $(draggable).detach().css({
        top: 0,
        left: 0
        }).prependTo($(droppable)).show();

        movedLastPlace = undefined;
    },
    over: function(evt, ui) {
        let draggable = ui.draggable;
        let droppable = this;

        if (movedLastPlace) {
        $(dragLastPlace).children().not(draggable).detach().prependTo(movedLastPlace);
        }

        if ($(droppable).children('.draggable:visible:not(.ui-draggable-dragging)').length > 0) {
        $(droppable).children('.draggable:visible').detach().prependTo(dragLastPlace);
        movedLastPlace = $(droppable);
        }
    }})
  };


  // CREATE DRAG-N-DROP TABLE WHEN CALLED
  const plotForLoop = (num_rows,num_cols) => {
    $plotName.empty();
    $plotTable.empty();
    $plotRows.empty();
    $plotColumns.empty();
    $plotNameInput.empty();
    $plotTable.show();
    
    let theader = `<table id="table" border="1">\n`;
    let tbody = "";

    // //CREATE TABLE FOR PLOT BASED ON USER INPUT (Drag and drop - jQuery UI)
    for (let i = 0; i < num_rows; i++) {

      tbody += `<tr>`;
      for (let j = 0; j < num_cols; j++) {
        tbody += 
        `<td class="droppable">
            <div class="draggable"><p>${i+1},${j+1}</p></div>
        </td>`;
      }
      tbody += `</tr>`;
    }
    let tfooter = "</table>";
    document.getElementById("tableContainer").innerHTML = theader + tbody + tfooter;
    // $("#table").hide();
    
    dragNDrop();

    //ADD PLOT TITLE
    $plotName.text($plotNameInput.val());
  };

  //CREATE PLOT 
  function createPlot() {
    var num_rows = $plotRows.val();
    var num_cols = $plotColumns.val();

    plotForLoop(num_rows,num_cols);
    $plotName.text($plotNameInput.val());
  }

  //REPOPULATE PLOTS AFTER CLICKING ON RIGHT SIDE
  function repopulatePlot(){
    return getPlots().then((response) => {
      currentPlotList = response;
      currentPlotList.push("test populate")
      console.log(currentPlotList);

      for (i=0; i < currentPlotList.length; i++){
        if (currentPlotList[i].id === $(this).data("id")){
          
          var num_rows = currentPlotList[i].plot_rows;
          var num_cols = currentPlotList[i].plot_columns;
      
          plotForLoop(num_rows,num_cols);
          $plotName.text(currentPlotList[i].plot_name);
        }
      }
    })
  };

  //OPENS PLANT CHOICE MODAL DATA
    // // JONESIFIED
  // $("#plotTable").on("click", "td", (e) => {
  //   console.log(e.currentTarget);
  //   cell = $(e.currentTarget);
  //   $plantChoiceModal.addClass("is-active");
  // });

    // DRAG N DROP
  $("#tableContainer").on("click", "td", (e) => {
    console.log(e.currentTarget);
    cell = $(e.currentTarget);
    $plantChoiceModal.addClass("is-active");
    // console.log(this.parentNode.rowIndex);
    // console.log(this.cellIndex);
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
      renderPlotList();
      
      console.log("Success");
    });
  }

  //HIGHLIGHTS ONE PLANT
  $(".plant_img").on("click", function () {
    console.log($(this));
    console.log(cell.children.length);
    cell.empty();
    div = $("<div>").addClass(["draggable", "ui-draggable", "ui-draggable-handle"]).appendTo(cell)
    $(this).clone().appendTo(div);
    $(".plant_img").removeClass("chosen");
    $(this).addClass("chosen");
    dragNDrop();
  });

  //SAVE NEW PLANT DATA
  function newPlantData() {
    //TURN DATA INTO OBJECT
    const newPlant = {
      plant_type: $plantTypeInput.val(),
      sow_date: $sowDateInput.val(),
      notes_input: $noteInput.val(),
      //x_coordinate: this.cellIndex,
      //y_coordinate: this.rowIndex,
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
    // renderPlotList();
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
    renderPlotList();
  });

  //FUNCTION FOR SAVING PLANT TO PLOT LOCATION
  function addPlant(plant) {
    return $.ajax({
      url: "/api/plot/update/:plot_name",
      data: plant,
      method: "POST",
    });
  }

  //WEATHER ICON AND CURRENT DATE GET REQUEST
  $.get("/api/currentweather/1").then(function (response) {
    console.log(response);
    let currentWeatherIcon = response.weather[0].icon;
    $("#currentWeatherImg").html(
      `<img id="icon" class="pixelate level-item mr-3" style="height: 40px;" alt="weather-icon" src="https://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png"/>`
    );
  });
  $("#currentDateTime").text(dayjs().format("ddd. MMM DD, YYYY"));

  
                    /////////////////// WORKING (END) ///////////////////



                    /////////////////// NOT USED ///////////////////

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
 
  //ATTEMPT TO CHANGE TABLE DATA COLOR
  $("#plotTable").on("click", "td", function () {
    alert(
      "My position in table is: " +
        this.cellIndex +
        "x" +
        this.parentNode.rowIndex
    );
  });

  // $("#tableContainer").on("click", "li", function () {
  //   alert(
  //     "My position in table is: " +
  //       this.cellIndex +
  //       "x" +
  //       this.parentNode.rowIndex
  //   );
  // });

  // Delete the clicked note
  const handlePlotDelete = function (event) {
    // prevents the click listener for the list from being called when the button inside of it is clicked
    event.stopPropagation();

    const plot = $(this).parent(".list-group-item").data();

    if (activePlot.id === plot.id) {
      activePlot = {};
    }

    deletePlot(plot.id).then(() => {
      renderActivePlot();
    });
  };
                    /////////////////// NOT USED (END) ///////////////////



  //LAST BIT OF CONVERSION/////////////////////////
  $plotList.on("click", ".list-group-item", repopulatePlot);
  // $(".popBtn").click(populatePlot);
  // $plotList.on("click", ".delete-note", handlePlotDelete);

  // Gets and renders the initial list of plots
  consoleLogDB();
  renderPlotList();
});
