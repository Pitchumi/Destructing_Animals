// CANVAS INIT
// Const in Maj ;)
const CANVAS = document.getElementById("game");
const CTX = CANVAS.getContext("2d"); // Context, to use to draw in
const X_CENTER = CANVAS.width / 2
const Y_CENTER = CANVAS.height / 2

// INPUT MANAGER

//document.addEventListener("mousedown", mouseListener, false); // Called when user interact with the mouse (usually on mouse click)
//document.addEventListener("mousemove", mouseListener, false); // Called when the mouse is moving

function mouseListener(event) // What to do then 
{
    console.log(event);
}

class Sprite {
    constructor(position) {
        this.position = position
    }

    draw(){
        CTX.fillStyle = 'red'
        CTX.fillRect(this.position.x, this.position.y, 50, 50)
        return CTX
    }


}

const rectangle = new Sprite({
    x : 20,
    y : 20
})


rectangle.draw();

// MAIN

        function main() // Gameloop
        {
            // PROCESS (fun todo) - Do the maths here
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height); // This clean the canvas at each frame
            
            // DRAW (fun todo) - Draw everything here
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

