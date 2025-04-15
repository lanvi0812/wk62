let mic;

function setup() {

createCanvas(400, 400);

mic = new p5.AudioIn();

mic.start();

}

function draw() {

background(220);

noFill(0);

let volume = mic.getLevel();

let circleSize = map (volume, 0, 1, 50, height);

circle(width/2, height/2, circleSize);

// console.log(volume);

// //determine stroke colour based on volume

let strokeCol;

if (volume <0.1) {

strokeCol = color(0, 100, 255) //quiet blue

} else if (volume <0.4) {

strokeCol = color(0, 255, 100); //yellow

} else {

strokeCol = color(255, 200, 0); //red

}
stroke(strokeCol);

circle(width/2, height/2, circleSize);

}
