//w__________________________________________x
//|                                          |
//|                                          |
//|                                          |
//|                                          |                                     
//y__________________________________________z
// w is (0,0)
// x is (450,0)
// y is (O,150)
// z is (450,150)



// CANVAS INIT

const CANVAS = document.getElementById("game");
const CTX = CANVAS.getContext("2d"); // Context, to use to draw in

//CONST
const X_CENTER = CANVAS.width / 2
const Y_CENTER = CANVAS.height / 2

//CLASSES

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
    
    get current_x_position(){
        return this.x_pos
    }

    get current_y_position(){
        return this.y_pos
    }

    set current_x_position(new_x_pos){
        this.x_pos = new_x_pos 
    }

    set current_y_position(new_y_pos){
        this.y_pos = new_y_pos 
    }

    draw(){
        CTX.fillStyle = 'red'
        CTX.fillRect(this.x_pos, this.y_pos, this.height, this.width)
        return CTX
    }

}


//OBJECTS INIT

const rectangle = new Sprite(20, 20, 50, 50)
rectangle.draw();

//FUNCTIONS FOR OTHER THAN INPUTS

function collision_detector(){
    can_i_move = false
    
}


// INPUT MANAGER

//document.addEventListener("mousedown", mouseListener, false); // Called when user interact with the mouse (usually on mouse click)
//document.addEventListener("mousemove", mouseListener, false); // Called when the mouse is moving
document.addEventListener("keydown", move, false)

//INPUT FUNCTIONS

function mouseListener(event) // What to do then 
{
    console.log(event);
}

function move(event){
    if (event.key == "ArrowUp"){
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height);
        rectangle.current_y_position -= 10
        rectangle.draw()
    }
    if (event.key == "ArrowDown"){
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height)
        rectangle.current_y_position += 10
        rectangle.draw()
    }
    if (event.key == "ArrowLeft"){
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height)
        rectangle.current_x_position -= 10
        rectangle.draw()
    }
    if (event.key == "ArrowRight"){
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height)
        rectangle.current_x_position += 10
        rectangle.draw()
    }
    console.log(event.key)
}

// MAIN

        function main() // Gameloop
        {
            // PROCESS (fun todo) - Do the maths here
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height); // This clean the canvas at each frame

            // DRAW (fun todo) - Draw everything here
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

