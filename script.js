"use strict";
const btnGenerate = document.querySelector(".btn");
const wishContainer = document.querySelector(".wish-container");
const countDowm = document.querySelector(".countdown");
const age = document.querySelector(".level-up");
const year = document.querySelector(".year");
let currWish = 0;
const intro = document.querySelector(".text-intro");
const inventoryItems = document.querySelectorAll(".inventory-item");

const calcDate = function () {
  let countDownDate = new Date("Nov 25, 2023 00:00:00").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countDowm.textContent = hours + ":" + minutes + ":" + seconds;
  return distance;
};

if (calcDate() < 0) {
  countDowm.classList.add("hidden");
  intro.textContent = "Return at your birthday!";
  btnGenerate.classList.add("hidden");
}

const animateAge = function () {
  let ageCurr = new Date().getFullYear() - 1977;
  let birthAge = ageCurr;
  age.textContent = birthAge;
  return birthAge;
};

year.textContent = new Date().getFullYear();

setInterval(calcDate, 1000);

btnGenerate.addEventListener("click", function () {
  if (currWish) {
    currWish.classList.add("hidden");
  }
  let wishes = document.querySelectorAll(".wish");
  let ind = Math.trunc(Math.random() * 5);
  ind = ind === 5 ? 4 : ind;
  if (wishes[ind] === currWish) {
    // wishes[ind].classList.add("hidden");
    ind = ind === 4 ? 0 : ind + 1;
    currWish = wishes[ind];
  } else {
    currWish = wishes[ind];
  }
  currWish.classList.remove("hidden");
  if (currWish.classList.contains("wish-level")) {
    setInterval(animateAge, 1000);
  }
  age.textContent = animateAge() - 1;
});
