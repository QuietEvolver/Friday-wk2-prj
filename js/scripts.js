function questionsEvaluation(answer){
  if (answer >= 5 && answer <= 12){
    return "Python";
  } else if (answer >= 13 && answer <= 22){
    return "Javascript";
  } else if (answer >= 23 && answer <= 30){
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

  let display = "Your total score: " + answer + 
  ".  " +  questionsEvaluation(answer) + " is your suggested programming language.";

 document.getElementById("result").innerText = display;

  //error handling NaN registers as integer.
  // if ((Number.isInteger(questionValue1) || Number.isInteger(questionValue2) || Number.isInteger(questionValue3) || Number.isInteger(questionValue4) || Number.isInteger(questionValue5))){
  //   document.getElementById("result").innerText = output;
  // } else 
  if ((questionValue1 || questionValue2 || questionValue3 || questionValue4 || questionValue5) === NaN) {
    document.getElementById("result").innerText = errorMessage();
  }

  questionValue1 = document.getElementById("question-1").value = null;
  questionValue2 = document.getElementById("question-2").value = null;
  questionValue3 = document.getElementById("question-3").value = null;
  questionValue4 = document.getElementById("question-4").value = null;
  questionValue5 = document.getElementById("question-5").value = null;

  // clear previous answers display
  setTimeout(() => {
    document.getElementById("result").innerText = null;
  }, 5000);
}

window.addEventListener("load", () => {
  console.log("Interval run");
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});