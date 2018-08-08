function getIt() {
  $('p').on("click", function(){
  window.alert("Hey!")
});
}

function frameIt() {
  $('img').on("load", function(){
  var i= $('img');
  i.className += " tasty";
});
}

$(document).ready(function(){

getIt();
frameIt();

});
