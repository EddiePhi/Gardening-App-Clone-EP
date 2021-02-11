// https://codepen.io/marceloneil/pen/pbqQdv

// let num_rows = 3;
// let num_cols = 3;
// var theader = `<table id="table" border="1">\n`;
// var tbody = "";

// for (var i = 0; i < num_rows; i++) {  
//     tbody += `<tr>`;
//     for (var j = 0; j < num_cols; j++) {
//     tbody += 
//         `<td class="droppable">
//             <div class="draggable">${i+1},${j+1}</div>
//         </td>`;
//     }
//     tbody += `</tr>`;
// }
// var tfooter = "</table>";
// document.getElementById("tableContainer").innerHTML = theader + tbody + tfooter;
// //   $("#table").hide();

$(document).ready(function () {
    var dragLastPlace;
    var movedLastPlace;


    $('.draggable').draggable({
    placeholder: 'placeholder',
    zIndex: 1000,
    containment: 'table',
    helper: function(evt) {
        var that = $(this).clone().get(0);
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
        var draggable = ui.draggable;
        var droppable = this;

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
        var draggable = ui.draggable;
        var droppable = this;

        if (movedLastPlace) {
        $(dragLastPlace).children().not(draggable).detach().prependTo(movedLastPlace);
        }

        if ($(droppable).children('.draggable:visible:not(.ui-draggable-dragging)').length > 0) {
        $(droppable).children('.draggable:visible').detach().prependTo(dragLastPlace);
        movedLastPlace = $(droppable);
        }
    }
    })
});






