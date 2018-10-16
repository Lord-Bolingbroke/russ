$(document).ready(function() {
  $(".clickable").click(function() {
    $("#picture-showing").toggle();
    $("#picture-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".click").click(function() {
    $("#nested-picture-showing").toggle();
    $("#nested-picture-hidden").toggle();
  });
});
