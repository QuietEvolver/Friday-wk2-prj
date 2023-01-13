/*
*/

function questionsEvaluation(answer){

  console.log("logging first tier");
  if (answer >= 6 && answer <= 13){
    console.log("logging IF first tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "Python";
  } else if (answer >= 14 && answer <= 22){
    console.log("logging ElseIF 2nd tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "Javascript";
  } else if (answer >= 23 && answer <= 30){
    console.log("logging ElseIF 2nd tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "C#";
  }
}

function errorMessage(){
  return "ERROR MSG: Enter #s/make selections."
}

const handleSuggestor = (e) => {
  e.preventDefault();

  // data capture
  let questionValue1 = parseInt(document.getElementById("question-1").value);
  let questionValue2 = parseInt(document.getElementById("question-2").value);
  let questionValue3 = parseInt(document.getElementById("question-3").value);
  let questionValue4 = parseInt(document.getElementById("question-4").value);
  let questionValue5 = parseInt(document.getElementById("question-5").value);

  const answer = questionValue1 + questionValue2 + questionValue3 + questionValue4 + questionValue5;

  questionsEvaluation(answer);

  let output = "Your total score: " + answer + 
  ".  " +  questionsEvaluation(answer) + " is your suggested programming language.";

  document.getElementById("result").innerText = output;

  //error handling//|| Number.isInteger(question3)|| Number.isInteger(question4)|| Number.isInteger(question5)
  // if ((Number.isInteger(questionValue1) || Number.isInteger(questionValue2))){
  //   document.getElementById("result").innerText = output;
  // } else if ((questionValue1 || questionValue2) ===  " ") {
  //   document.getElementById("result").innerText = errorMessage();
  // }
  questionValue1 = document.getElementById("question-1").value = null;
  questionValue2 = document.getElementById("question-2").value = null;
  questionValue3 = document.getElementById("question-3").value = null;
  questionValue4 = document.getElementById("question-4").value = null;
  questionValue5 = document.getElementById("question-5").value = null;


  
//  output = setTimeout(() => {
//     output.remove() 
//   }, timeout);
}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});