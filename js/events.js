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
    $("img").addClass("tasty");
});
}

$(document).ready(function(){

getIt();
frameIt();
pressIt;

});
