img = "";
status = "";
results = [];
function setup() {
    canvas = createCanvas(800, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, r) {
    if (error) {
        console.log("error");
    } else {
        results = r;
        console.log(results);
    }
}
function preload() {
    img = loadImage("pen.JPG");
}
function draw() {
    for (i = 0; i < results.length; i++) {
        image(img, 0, 0, 800, 400);
        noFill();
        stroke("#ff00ff");
        a = results[0].normalized.x * 800;
        b = results[0].normalized.y * 400;
        c = results[0].normalized.width * 800;
        d = results[0].normalized.height * 400;
        rect(a, b, c, d);
    }
    //text(detectedLabel, detectedX / 10, detectedY / 10 - 10);
}