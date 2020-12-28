// Reference from Eddie P HW: WK-11 (Note-Taker)

const $noteTitle = $("#note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");



// Custom event listeners
const $plusPlantBtn = $(".plus-plot");
const $rowsInput = $("#rows-input");
const $columnsInput = $("#columns-input");
const $savePlotBtn = $("#save-plot-btn");
const $titleDiv = $("#title-div");
const $myTable = $("#myTable");
// End of customer event listeners

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting all notes from the db
const getNotes = () => {
  return $.ajax({
    url: "/api/plot",
    method: "GET",
  });
};

// A function for saving a note to the db
const saveNote = (note) => {
  return $.ajax({
    url: "/api/plot",
    data: note,
    method: "POST",
  });
};

// A function for deleting a note from the db
const deleteNote = (id) => {
  return $.ajax({
    url: "api/plot/" + id,
    method: "DELETE",
  });
};

//Table generation:
      // https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-7.php
      // https://stackoverflow.com/questions/8182608/dynamically-creating-table-with-user-input
      // https://stackoverflow.com/questions/171027/add-table-row-in-jquery 
const createTable = () => {
  let rn = activeNote.rows;
  let cn = activeNote.columns;

  for(let r = 0; r < parseInt(rn); r++){
      let x = document.getElementById('myTable').insertRow(r);
      for (let c = 0; c < parseInt(cn); c++){
        let y = x.insertCell(c);
        y.innerHTML = "Row-" + r + " Column-" + c; 
      };
    };
}

// If there is an activeNote, display it, otherwise render empty inputs
const renderActiveNote = () => {
  $saveNoteBtn.hide();
  $myTable.empty();
  

  if (activeNote.id) {
    $noteTitle.attr("readonly", true);
    // $noteText.attr("readonly", true);
    $noteTitle.val(activeNote.title);
    // $noteText.val(activeNote.text);

    $titleDiv.attr("readonly", true);
    $titleDiv.text(`columns: ${activeNote.columns} \n rows: ${activeNote.rows} \n`);
    // consider .html() method for jquery
    // $titleDiv.html(`<div>Test .html() insert</div>`);
    
    $titleDiv.html(createTable)

    

    // jQuery has a built-in facility to manipulate DOM elements on the fly.
    // You can add anything to your table like this:
    // $("#myTable").find('tbody')
    // .append($('<tr>')
    //     .append($('<td>')
    //         .append($('<img>')
    //             .attr('src', 'img.png')
    //             .text('Image cell')
    //         )
    //     )
    // );

  } else {
    $noteTitle.attr("readonly", false);
    // $noteText.attr("readonly", false);
    $noteTitle.val("");
    // $noteText.val("");

    $titleDiv.attr("readonly", false);
    $titleDiv.text("");
  }
};

// Get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function () {
  const newNote = {
    title: $noteTitle.val(),
    text: $columnsInput.val(),
    rows: $rowsInput.val(),
    columns: $columnsInput.val()
  };

  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
const handleNoteDelete = function (event) {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  const note = $(this).parent(".list-group-item").data();

  if (activeNote.id === note.id) {
    activeNote = {};
  }

  deleteNote(note.id).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
const handleNoteView = function () {
  $plusPlantBtn.hide();
  activeNote = $(this).data();
  renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = function () {
  $plusPlantBtn.show();
  activeNote = {};
  renderActiveNote();
};

// If a note's title or text are empty, hide the save button
// Or else show it
const handleRenderSaveBtn = function () {
  if (!$noteTitle.val().trim() || !$titleDiv.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

// Render's the list of note titles
const renderNoteList = (notes) => {
  console.log(notes);
  $noteList.empty();

  const noteListItems = [];

  // Returns jquery object for li with given text and delete button
  // unless withDeleteButton argument is provided as false
  const create$li = (text, withDeleteButton = true) => {
    const $li = $("<li class='list-group-item'>");
    const $span = $("<span>").text(text);
    $li.append($span);

    if (withDeleteButton) {
      const $delBtn = $(
        "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
      );
      $li.append($delBtn);
    }
    return $li;
  };

  if (notes.length === 0) {
    noteListItems.push(create$li("No saved Notes", false));
  }

  notes.forEach((note) => {
    const $li = create$li(note.title).data(note);
    noteListItems.push($li);
  });

  $noteList.append(noteListItems);
};


// Added custom functions

// const handleAddTomato = function () {
//   const tomato = {
//     title: "Tomato",
//     text: "Facts about tomatoes",
//   };

//   saveNote(tomato).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

// const handleAddLettuce = function () {
//   const lettuce = {
//     title: "Lettuce",
//     text: "Facts about lettuce",
//   };

//   saveNote(lettuce).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

// const handleAddPepper = function () {
//   const pepper = {
//     title: "Pepper",
//     text: "Facts about peppers",
//   };

//   saveNote(pepper).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

const handleTableRender = function () {
  const newNote = {
    title: $noteTitle.val(),
    text: $columnsInput.val(),
    // rows: $rowsInput.val(),
    // columns: 
  };
  $noteText.val($columnsInput.val());

  // saveNote(pepper).then(() => {
  //   getAndRenderNotes();
  //   renderActiveNote();
  // });
  };
// End of custom functions

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => {
  return getNotes().then(renderNoteList);
};

// $saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Custom event listeners (copied from existing code in this file)
// $tomatoBtn.on("click", handleAddTomato);
// $lettuceBtn.on("click", handleAddLettuce);
// $pepperBtn.on("click", handleAddPepper);
$savePlotBtn.on("click", handleNoteSave)
// End of custom event listeners



// Gets and renders the initial list of notes
getAndRenderNotes();