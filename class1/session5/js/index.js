const depthWrap = document.querySelector(".depthWrap");
const bar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight);
  depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
  bar.style.width = per + "%";

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;
});

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};
