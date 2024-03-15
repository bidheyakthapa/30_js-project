const inputTask = document.getElementById("inputTask");
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("list-container");
const snackBox = document.getElementById("snackBox");

inputTask.addEventListener("click", addTask);
inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    showSnack('<img src="images/invalid.png">Please enter some task', true);
  } else {
    let newTask = document.createElement("li");
    newTask.textContent = inputBox.value;
    taskList.appendChild(newTask);
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.alt = "Delete Img";
    newTask.appendChild(img);
    document.getElementById("input-box").value = "";
    showSnack('<img src="images/success.png">Successfully added task');
  }
  saveData();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}

showTask();

const maxSnack = 3;

function showSnack(msg, isInvalid) {
  let snack = document.createElement("div");
  snack.classList.add("snack");
  snack.innerHTML = msg;
  snackBox.appendChild(snack);

  while (snackBox.children.length > maxSnack) {
    snackBox.removeChild(snackBox.firstChild);
  }

  if (isInvalid) {
    snack.classList.add("invalid");
  } else {
    snack.classList.remove("invalid");
  }

  setTimeout(() => {
    snack.remove();
  }, 4000);
}
