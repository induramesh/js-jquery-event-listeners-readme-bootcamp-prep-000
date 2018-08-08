function getIt() {
  $('p').on("click", function(){
  window.alert("Hey!")
});
}

function frameIt() {
  $('img').on("load", function(){
    $("img").addClass("tasty");
});
}

function pressIt() {
  $('form').on('keydown', function(key){
      if(key.which == 71){
      alert('G was pressed');
      }
});
}

function submitIt() {
  $("form").on("submit", function(){
    if ($( "input:first" ).val() === "correct") {
      alert('your form is going to be submitted now');
    return; }
  alert("you entered the wrong value");
  return;
});
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
