// window.onload = function () {
//   console.log("It's loaded!");
// //   document.getElementById("reset").addEventListener("click", startGame);
//   console.log("listening");
//};

$(document).ready(function(){
  // mms: ensure the code that starts your game and manipulates the DOM, occurs after the document is ready
  listeners();
});


// mms: I ould like to see you pass in the collection that will be randomized.
function returnRandomSelected(){
    var order = [];
    var count = 0;
    var mySet = new Set();
    function randomSelected(){
     var cards = 6;
     var randomnumber = Math.random();
     var randomlyselectedcard = Math.floor(randomnumber*cards);
     return randomlyselectedcard;
    }
    while(count < 6){
      var a = randomSelected();
      if(!mySet.has(a)){
          mySet.add(a);
          order.push(a);
          count++ ;
      }
    }
    return order;
  }
    // mms: remove duplicate.  Already called in listeners()
    // var cOrder = returnRandomSelected();
  /***********************/
var cardList = [
  ["#one .front","#one .back"],
  ["#two .front","#two .back"],
  ["#three .front","#three .back"],
  ["#four .front","#four .back"],
  ["#five .front","#five .back"],
  ["#six .front","#six .back"],
];
var qaPairs = [
  ["Capital of Brazil","Brazilia"],
  ["Capital of China","Beijing"],
  ["Capital of the U.S.","Washington D.C"],
  ["Capital of Venezuela","Caracas"],
  ["Capital of Cuba","Havana"],
  ["Capital of Chile","Santiago"]
];
function startGame(cOrder){
  for(var x = 0; x < 6; x++){
  $(cardList[x][0]).text(qaPairs[cOrder[x]][0]);
  $(cardList[x][1]).text(qaPairs[cOrder[x]][1]);
  }
}
// mms: duplicate call.  Already called from listeners()
// startGame();
function listeners(){
  $("#reset").on("click", function(){
    // mms: recommend rename, what is a cOrder?
    cOrder = returnRandomSelected();
    startGame(cOrder);
  });
}
// mms: moved listeners() execution to document.ready
// listeners();
