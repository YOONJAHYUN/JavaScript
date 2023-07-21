import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 4; // 파도 갯수
    this.totalPoints = 8; // 파형 움직임

    this.color = [
      "rgba(0, 199, 235, 0.4)",
      "rgba(0, 146, 199, 0.4)",
      "rgba(0,87, 158, 0.4)",
      "rgba(0, 158, 220, 0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
