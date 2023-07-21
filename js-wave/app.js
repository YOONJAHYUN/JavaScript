import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    // const img = <img src="낚시대.png" alt="여기"></img>;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.WaveGroup = new WaveGroup();
    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.scale(2.1, 1);

    this.WaveGroup.resize(this.stageHeight, this.canvas.height);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.WaveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
