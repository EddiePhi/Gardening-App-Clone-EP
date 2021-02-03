// Shopify Draggable Library (Using Swappable)
// https://shopify.github.io/draggable/
// https://shopify.github.io/draggable/docs/identifiers.html#swappable
// https://github.com/Shopify/draggable/tree/master/src/Swappable
$(document).ready(function() {
    console.log("test connect")

    var num_rows = 3;
    var num_cols = 3;

    var theader = `<table id="table" border="1">`;
    var tbody = "";

    //CREATE TABLE FOR PLOT BASED ON USER INPUT
    for (var i = 0; i < num_rows; i++) {
      tbody += `<tr><ul>`;
      for (var j = 0; j < num_cols; j++) {
        tbody+=
        `<li> ${i+1},${j+1}
          <img src=https://img.icons8.com/cotton/64/000000/lotus--v1.png>
        </li>`;
      }
      tbody += `</ul></tr>`;
    }
    var tfooter = `</table>`;
    document.getElementById("tableContainer").innerHTML = theader + tbody + tfooter;
    $("#table").hide();


    // This sample code will make list items draggable and allows you to swap them with other draggable elements:
    const swappable = new Draggable.Swappable(document.querySelectorAll('ul'), {
        draggable: 'li'
      });

    swappable.on('swappable:start', () => console.log('swappable:start'));
    swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
    swappable.on('swappable:stop', () => console.log('swappable:stop'));

    // change this to be an update statement
    swappable.on('swappable:stop', () => console.log('swappable:stop'));
});