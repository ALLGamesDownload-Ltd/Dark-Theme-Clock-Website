// Get DOM
const time = document.getElementById("time"),
  greetings = document.getElementById("greeting"),
  welComeName = document.getElementById("name"),
  focus = document.getElementById("focus");

// showTime
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // set AM/PM

  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 Hrs Formate

  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}<span>-</span>${amPm}`;

  // addZero
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  //Run the clock
  setTimeout(() => {
    showTime();
  }, 1000);
}

// set Background
function setBg() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greetings.textContent = "Good Morning";
    document.body.style.color = "yellow";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greetings.textContent = "Good Afternoon";
    document.body.style.color = "White";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greetings.textContent = "Good Evening";
    document.body.style.color = "White";
  }
}

// Event listeners
welComeName.addEventListener("keypress", (e) => {
  if (e.type === "keypress") {
    if (e.key === "Enter") {
      welComeName.textContent = localStorage.setItem(
        "name",
        e.target.innerText
      );
      getUser();
      welComeName.blur();
    }
  } else {
    welComeName.textContent = localStorage.setItem("name", e.target.innerText);
  }
});

focus.addEventListener("keypress", (e) => {
  if (e.type === "keypress") {
    if (e.key === "Enter") {
      focus.textContent = localStorage.setItem("focus", e.target.innerText);
      getFocus();
      focus.blur();
    }
  } else {
    focus.textContent = localStorage.setItem("focus", e.target.innerText);
  }
});

function getUser() {
  if (localStorage.getItem("name") === null) {
    welComeName.textContent = "[Enter Name]";
  } else {
    welComeName.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Your Today's Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// run
showTime();
setBg();
getUser();
getFocus();
