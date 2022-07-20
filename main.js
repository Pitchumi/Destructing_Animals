// CANVAS INIT

const CANVAS = document.getElementById("game");
const CTX = CANVAS.getContext("2d"); // Context, to use to draw in

//CONST
const X_CENTER = CANVAS.width / 2
const Y_CENTER = CANVAS.height / 2
const LEFT_ARROW_KEY = 37
const RIGHT_ARROW_KEY = 38
const UP_ARROW_KEY = 39
const DOWN_ARROW_KEY = 40


// INPUT MANAGER

//document.addEventListener("mousedown", mouseListener, false); // Called when user interact with the mouse (usually on mouse click)
//document.addEventListener("mousemove", mouseListener, false); // Called when the mouse is moving
document.addEventListener("keydown", move, false)

//Functions for input

function mouseListener(event) // What to do then 
{
    console.log(event);
}

function move(event){
    if (event.key == "ArrowUp"){
        //faire des trucs
    }
    console.log(event.key)
}


/**
 * Represents a sprite.
 * @constructor
 * @param {Number} x_pos - The xPosition of the sprite.
 * @param {Number} y_pos - The yPosition of the sprite.
 * @param {Number} height - The height of the sprite.
 * @param {Number} width - The width of the sprite.
 */
class Sprite {
    constructor(x_pos, y_pos, height, width) {
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.height = height
        this.width = width     
    }

    draw(){
        CTX.fillStyle = 'red'
        CTX.fillRect(this.x_pos, this.y_pos, this.height, this.width)
        return CTX
    }

    move(){
    }
}



const rectangle = new Sprite(20, 20, 50, 50)
rectangle.draw();



// MAIN

        function main() // Gameloop
        {
            // PROCESS (fun todo) - Do the maths here
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height); // This clean the canvas at each frame
            
            // DRAW (fun todo) - Draw everything here
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

