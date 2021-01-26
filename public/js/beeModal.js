// https://www.jquery-az.com/bulma-modal/

$(document).ready(function(){
    // $(".modal").addClass("is-active");

$("#bee").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closebtn").click(function() {
   $(".modal").removeClass("is-active");
});
$("#closetop").click(function() {
   $(".modal").removeClass("is-active");
});

$("#community").click(function() {
    window.location.replace("/community");
});
$("#locate-market").click(function() {
    window.location.replace("/locate-market");
});
$("#news").click(function() {
    window.location.replace("/news");
});
$("#social").click(function() {
    window.location.replace("/social");
});
$("#start-new").click(function() {
    window.location.replace("/start-new");
});
$("#what-to-grow").click(function() {
    window.location.replace("/what-to-grow");
});

});