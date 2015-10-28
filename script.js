// document.getElementById("score").addEventListener("click", function(){
// });
// document.getElementById("wrong-answer").addEventListener("click", function(){
// });
// document.getElementById("score").addEventListener("click", function(){
// });
//
// document.getElementById("score").addEventListener("click", function(){

// });

document.getElementById("reset").addEventListener("click", function(){
  console.log("listening");
  var order = [];
  var count = 0;
  var mySet = new Set();
  function returnRandomNumber(){
      var cards = 6;
      var randomnumber = Math.random();
      var randomlyselectedcard = Math.floor(randomnumber*cards);
      return randomlyselectedcard;
   }
   while(count < 6){
       var a = returnRandomNumber();
       if(!mySet.has(a)){
           mySet.add(a);
           order.push(a);
           count++ ;
       }
   }
   console.log(order);
  var qaPairs = [
    [["What is JavaScript?"],["answer"]],
    [["What is the DOM?"],["answer"]],
        [["Give 3 examples of AI"],["answer"]],
            [["What is computer programming?"],["answer"]],
                [[""],["answer"]],
                    [["blabla?"],["answer"]]
  ];

  console.log(qaPairs[0][0]); //question - front
  console.log(qaPairs[0][1]); //answer - back
  var answerString = (qaPairs[0][1]).join("");
  console.log(answerString);





});
