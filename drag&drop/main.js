let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", "dragged");
    selected = e.target;
  });

  rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (e.dataTransfer.getData("text/plain") === "dragged") {
      rightBox.appendChild(selected);
    }
  });

  leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  leftBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (e.dataTransfer.getData("text/plain") === "dragged") {
      leftBox.appendChild(selected);
    }
  });
}
