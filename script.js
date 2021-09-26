document.getElementById("start").addEventListener("click", function() {
  console.log("how you doing") 
  setInterval(myTimer, 1000);

  });
  //click start button
  


  //a timer starts
  var seconds=10 
 

function myTimer() {
  document.getElementById("timer").textContent=seconds
  seconds--
  console.log(seconds)
}
  //and I am presented with a question


  //I am presented with another question
  var questions=[
      {
          "question": "what you doing",
          "answer": "very well",
          "incorrect1": "wrong answer",
          "incorrect2": "wrong answer2",
          "incorrect3": "wrong answer3",
      },
       
      {
        "question": "what you doing",
        "answer": "very well",
        "incorrect1": "wrong answer",
        "incorrect2": "wrong answer2",
        "incorrect3": "wrong answer3",
    },

{
        "question": "what you doing",
        "answer": "very well",
        "incorrect1": "wrong answer",
        "incorrect2": "wrong answer2",
        "incorrect3": "wrong answer3",
    },

    {
        "question": "what you doing",
        "answer": "very well",
            "question": "what you doing",
            "answer": "very well",
            "incorrect1": "wrong answer",
            "incorrect2": "wrong answer2",
            "incorrect3": "wrong answer3",
        }
         

  ]
  //I answer a question incorrectly
  //Time is subtracted from clock


  //All questions are answered or timer reaches 0
  //The game is over
  //Save my intials and score
