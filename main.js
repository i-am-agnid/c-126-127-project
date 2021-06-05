song = ""

function preload() {
    song = loadSound("You can always go around song.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function setup() {
    Canvas = createCanvas(600, 500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function play() {
    song.play();
}

function stop() {
    song.stop();
}