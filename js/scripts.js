/*
-Form gathers input from the user.
-Branching is used to determine the result.
-Web API object properties or methods (not including window methods for alerting, prompting, or confirming) are used to display the result to the user.
-Event handler properties or event listeners are used to handle events.
-When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced.
*/

function questionsEvaluation(answer){

  if (answer === 6 && answer <= 13){
    document.getElementById("result").innerText = "Python";
    console.log("logging first tier");
  }
  
}

function errorMessage(){
  return "ERROR MSG: Enter #s/make selections."
}

const handleSuggestor = (e) => {
  e.preventDefault();

  // data capture
  const questionValue1 = document.getElementById("question-1").value;
  console.log("questionValue1: ", questionValue1);
  const questionValue2 = document.getElementById("question-2").value;
  console.log("questionValue2: ", questionValue2);

  const answer = questionValue1 + questionValue2;

  questionsEvaluation();
  let output = questionsEvaluation(answer);
  
  document.getElementById("result").innerText = output;
  //error handling//|| Number.isInteger(question3)|| Number.isInteger(question4)|| Number.isInteger(question5)
  // if ((Number.isInteger(questionValue1) || Number.isInteger(questionValue2))){
  //   document.getElementById("result").innerText = output;
  // } else if ((questionValue1 || questionValue2) ===  " ") {
  //   document.getElementById("result").innerText = errorMessage();
  // }
}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});