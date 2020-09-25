// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray =  [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// event listeners
document.addEventListener("keydown" , trashElements)

function trashElements(event) {
 if (event.keyCode == 49) {
    for (let n = 0 ; n < myArray.length ; n++){
        if (myArray[n] == 400) {
            myArray.splice(n, 1)
            n--
        }
    }
 } else if (event.keyCode == 50) {
    for (let n = 0 ; n < myArray.length ; n++) {
        if (myArray[n] == 200) {
            myArray.splice(n, 1)
            n--
        }
    }
 }
}
