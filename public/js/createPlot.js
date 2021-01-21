$(document).ready(function () {
  //Create Plot Modal
  const $modal = $("#plotModal");
  const $createPlot = $("#createPlot");
  const $close = $(".close");
  const $columnInput = $("#columnInput");
  const $rowInput = $("#rowInput");
  const $plotTable = $("#plotTable");
  const $makePlot = $("#makePlot");
  const $plantModal = $("#plantModal");

  $createPlot.click(function () {
    $modal.addClass("is-active");
  });

  $close.click(function () {
    $modal.removeClass("is-active");
    $plantModal.removeClass("is-active");
  });

  $makePlot.click(function () {
    $modal.removeClass("is-active");
    createPlot();
  });

  function createPlot() {
    var num_rows = document.getElementById("rowInput").value;
    var num_cols = document.getElementById("columnInput").value;
    var theader = '<table border="1">\n';
    var tbody = "";

    for (var i = 0; i < num_rows; i++) {
      tbody += "<tr>";
      for (var j = 0; j < num_cols; j++) {
        tbody += "<td>";
        tbody +=
          "<img src=https://img.icons8.com/cotton/64/000000/lotus--v1.png>";
        tbody += "</td>";
      }
      tbody += "</tr>\n";
    }
    var tfooter = "</table>";
    document.getElementById("plotTable").innerHTML = theader + tbody + tfooter;

    //Edit Cell Data
    var td = $("td");

    td.click(function () {
      $plantModal.addClass("is-active");
    });
  }
});
