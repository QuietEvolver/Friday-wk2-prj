/*
-Form gathers input from the user.
-Branching is used to determine the result.
-Web API object properties or methods (not including window methods for alerting, prompting, or confirming) are used to display the result to the user.
-Event handler properties or event listeners are used to handle events.
-When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced.
*/

const handleSuggestor = (event) => {
  event.preventDefault();

  const question1Val = document.getElementById("question-1").value;
  console.log("question1Val ", question1Val):
  const list = document.getElementById("list");

  const liItem = list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;

  console.log("li item", liItem);

  if (Number.isInteger(question1) || Number.isInteger(question2)|| Number.isInteger(question3)|| Number.isInteger(question4)|| Number.isInteger(question5)){
    document.getElementById("result").innerText = nums;
  } else {
    document.getElementById("result").innerText = errorMessage();
  }
}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});