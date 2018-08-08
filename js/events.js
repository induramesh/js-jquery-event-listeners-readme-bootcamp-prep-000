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
      if(key.which == 83){
      alert('s was pressed');
      }
});
}

$(document).ready(function(){

getIt();
frameIt();
pressIt;

});
