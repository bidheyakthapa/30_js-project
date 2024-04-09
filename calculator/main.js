const display = document.querySelector(".display input");

document.addEventListener("keydown", press);

function press(e) {
  console.log("Key pressed:", e.key);

  if (/[0-9]/.test(e.key)) {
    display.value += e.key;
  } else if (e.key === ".") {
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  } else if (/[+\-*\/]/.test(e.key)) {
    display.value += ` ${e.key} `;
  } else if (e.key === "Backspace") {
    if (display.value.length > 0) {
      display.value = display.value.slice(0, -1);
    }
  } else if (e.key === "Enter") {
    if (display.value != 0) {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
  } else if (e.key === "Escape") {
    display.value = "";
  }

  e.preventDefault();
}
