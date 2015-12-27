class Helper {
    public static GetFrequency(pitch: number): number {
        return (pitch * 100) + 1;
    }
}

class Game {
    BPM: number;
    Ship: Ship;
    Enemies: Enemy[];
    Canvas: HTMLCanvasElement;
    Audio: AudioContext;
    constructor(canvas: HTMLCanvasElement) {
        this.Canvas = canvas;
        this.Audio = new (<any>window).AudioContext;
        this.Ship = new Ship(this.Audio, 350, 10);
        this.Enemies = [new Enemy(this.Audio, 100, 1)];
        this.BPM = 77;
    }
    Draw() {

    }

    Update() {

    }
}

class Enemy {
    height: number;
    constructor(private audio: AudioContext, private pitch: number, private health: number) {
        this.health = 0;
    }
}

class Ship {
    constructor(private audio: AudioContext, private pitch: number, private health: number) {
    }
}

window.onload = () => {
    var game = new Game(<HTMLCanvasElement>document.getElementById("MainCanvas"));
};