$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var ip=$("input#sen").val();
    var jp=ip.toUpperCase();
    $(".sen").text(jp);
    $("#letter").show();
    event.preventDefault();
  });
});
