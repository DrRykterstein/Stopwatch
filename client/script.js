const stopwatch = document.getElementById('stopwatch');
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');

function getItem() {
  const value = localStorage.getItem("stopwatch-value");
  if (value) stopwatch.innerHTML = JSON.parse(value);
}
getItem();

function setItem(value) {
  localStorage.setItem("stopwatch-value", JSON.stringify(value));
}

let interval = null;
let wasClicked = false;
let value = stopwatch.innerHTML;
const setStopwatch = () => {
  value++;
  stopwatch.innerHTML = value;
  setItem(value);
}

btn.addEventListener("click", () => {
  wasClicked = !wasClicked;
  if (wasClicked) {
    interval = setInterval(setStopwatch, 1000);
    btn.innerHTML = "Stop Stopwatch";
  } else {
    clearInterval(interval);
    btn.innerHTML = "Start Stopwatch"
  }
});
  
reset.addEventListener("click", () => {
  stopwatch.innerHTML = value = 0;
  clearInterval(interval);
  setItem(value);
});
