let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.1;

const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (e) => {
  //   console.log(e);
  // 가운데가 0이 되게 한다.
  x = e.pageX - window.innerWidth / 2;
  //   y = e.pageY - window.innerHeight / 2;
});

const loop = () => {
  // 부드럽게 움직이기
  targetX += (x - targetX) * speed;

  shadow.style.transform = `rotateY(${-targetX / 30}deg)`;
  date.style.transform = `translateX(${-targetX / 10}px)`;
  human.style.transform = `translateX(${targetX / 40}px)`;
  textImg.style.transform = `translateX(${targetX / 15}px)`;

  window.requestAnimationFrame(loop);
};
loop();
