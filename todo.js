// button
let button = document.querySelector("button");
// input
let input = document.querySelector("input");
// ul
let ul = document.querySelector("ul");

// listening to button when user clicks -> and run logic after event done
button.addEventListener("click", addTask);

function addTask() {
  let task = input.value;
  if (task) {
    taskCreator(task);
  } else {
    alert("enter some task");
  }
  input.value = "";
}

function taskCreator(task) {
  let div = document.createElement("div");
  let li = document.createElement("li");
  let newButton = document.createElement("button");
  newButton.textContent = "delete";
  li.textContent = task;
  div.appendChild(li);
  div.appendChild(newButton);
  ul.appendChild(div);

  newButton.addEventListener("click", function () {
    div.remove();
  });
}