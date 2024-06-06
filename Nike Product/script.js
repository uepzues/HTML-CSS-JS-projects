const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const shoe1 = document.querySelector(".shoe1");
const shoe2 = document.querySelector(".shoe2");
const cardTop = document.querySelector(".card_top");

function resetAnimations() {
  shoe1.classList.remove("animateBlue", "animateBlueRev");
  shoe2.classList.remove("animateRed", "animateRedRev");
}

redBtn.addEventListener("click", () => {
  resetAnimations();
  cardTop.style.backgroundColor = "#d35246";
  shoe2.classList.add("animateRed");
  shoe1.classList.add("animateBlue");
});

blueBtn.addEventListener("click", () => {
  resetAnimations();
  cardTop.style.backgroundColor = "goldenrod";
  shoe1.classList.add("animateBlueRev");
  shoe2.classList.add("animateRedRev");
});
