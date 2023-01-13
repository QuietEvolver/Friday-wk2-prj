/*
-Form gathers input from the user.
-Branching is used to determine the result.
-Web API object properties or methods (not including window methods for alerting, prompting, or confirming) are used to display the result to the user.
-Event handler properties or event listeners are used to handle events.
-When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced.
*/

// function questions(){

//   if (){
//    // isolate list items through val
//    const liItem1 = list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
//    console.log("li item/e", liItem, e);
//   }
// }

function errorMessage(){
  return "ERROR MSG: Enter #s/make selections."
}

const handleSuggestor = (e) => {
  e.preventDefault();
 // questions();
  // data capture
  const questionVal = document.getElementById("answer-selections").value;
  console.log("questionVal: ", questionVal);
  const questionValue1 = document.getElementById("question-1").value;
  console.log("questionValue1: ", questionValue1);
  const questionValue2 = document.getElementById("question-2").value;
  console.log("questionValue2: ", questionValue2);
  // const list = document.getElementById("list");
  // console.log("my list: ", list);

  // //add ITEM to disply list item in order
  // // const liItem = list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
  // const liItem = list.innerHTML += `<li><a href="#">Question for you ${list.children.length}</a></li>`;
  // console.log("li item", liItem);

  // error handling
  // const nums = "Display numbers: YES";
  // if ((Number.isInteger(question1) || Number.isInteger(question2)|| Number.isInteger(question3)|| Number.isInteger(question4)|| Number.isInteger(question5))){
  //   document.getElementById("result").innerText = nums;
  // } else 
  if ((questionValue1 || questionValue2) ===  " ") {
    document.getElementById("result").innerText = errorMessage();
  }
}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});