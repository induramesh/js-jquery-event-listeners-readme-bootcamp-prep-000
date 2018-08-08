function getIt() {
  $('p').on("click", function(){
  window.alert("Hey!")
});
}

function frameIt() {
  $('p').on("click", function(){
  window.alert("Hey!")
});
}

$(document).ready(function(){

getIt();
frameIt();

});
