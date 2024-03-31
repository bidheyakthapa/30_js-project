const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLy1lxdF5Be47OrKTrdin6cYQoJqC8AdWper8Zao0zjXdx4YKSekd-yo23BQGz2gU4bw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
