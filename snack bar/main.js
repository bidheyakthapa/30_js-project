const snackBox = document.getElementById("snackBox");
let sucessMsg = '<img src="images/sucess.png"> Successfully submitted';
let errorMsg = '<img src="images/error.png">Please fix the error!';
let invalidMsg = '<img src="images/invalid.png">Invalid input, check again';

function showSnack(msg) {
  let snack = document.createElement("div");
  snack.classList.add("snack");
  snack.innerHTML = msg;
  snackBox.appendChild(snack);

  if (msg == errorMsg) {
    snack.classList.add("error");
  }
  if (msg == invalidMsg) {
    snack.classList.add("invalid");
  }

  setTimeout(() => {
    snack.remove();
  }, 5000);
}
