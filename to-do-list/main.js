const addTask = document.getElementById("addTask");
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("list-container");

addTask.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Please ente some task");
  } else {
    let newTask = document.createElement("li");
    newTask.textContent = inputBox.value;
    taskList.appendChild(newTask);
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.alt = "Delete Img";
    newTask.appendChild(img);
    document.getElementById("input-box").value = "";
  }
  saveData();
});

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
