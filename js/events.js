function getIt() {
  $('p').on("click", function(){
  window.alert("Hey!")
});
}

function frameIt() {
  $('img').on("load", function(){
  "img" += " tasty";
});
}

$(document).ready(function(){

getIt();
frameIt();

});
