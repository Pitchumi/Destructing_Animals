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
 PLAYER_JUMP_HEIGHT = 20

//VAR
var jumping = false


//CLASSES

/**
 * Represents a sprite.
 * @constructor
 * @param {Number} x_pos - The xPosition of the sprite.
 * @param {Number} y_pos - The yPosition of the sprite.
 * @param {Number} height - The height of the sprite.
 * @param {Number} width - The width of the sprite.
 * @param {String} color - The color of the object
 */
 class Sprite {
    constructor(x_pos, y_pos, height, width, color) {
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.height = height
        this.width = width    
        this.color = color 
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
        CTX.fillStyle = this.color
        CTX.strokeRect(this.x_pos, this.y_pos, this.height, this.width)
        return CTX
    }

}


//OBJECTS INIT

const platform = new Sprite(0, 180, CANVAS.width, 20, "black")
platform.draw()

var rectangle = new Sprite(20, platform.current_y_position - 40, 40, 40, "blue")
rectangle.draw();



//FUNCTIONS FOR OTHER THAN INPUTS

/**
 * Will test the boundaries of playground, we don't want that obj exits the playground
 * @param {Sprite} obj Name of the Sprite object  tested
 * @param {String} dir Direction where obj is stucking
 * @returns {Boolean} is_colliding, false if playground boudaries not yet crossed, true elif
 */
function collision_detector_with_playground_borders(obj, dir){
    is_colliding = false
    hit_top = obj.current_y_position < 5
    hit_bottom = obj.current_y_position > 145
    hit_left = obj.current_x_position < 5
    hit_right = obj.current_x_position > 445

    switch(dir){
        case "up":        
        if (hit_top){
            is_colliding = true
            return is_colliding
        }
        case "right":
            if (hit_right){
                is_colliding = true
                return is_colliding
            }
    }      
    return is_colliding       
}


function land(){
    jumping = false
    rectangle.current_y_position += PLAYER_JUMP_HEIGHT
}

function jump(){
    if (!jumping) {
        jumping = true;
        rectangle.current_y_position -= PLAYER_JUMP_HEIGHT
        setTimeout(land, 100);

      }
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
        jump()
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height);
        rectangle.current_y_position -= 10
        rectangle.draw()
        platform.draw()
    }

    if (event.key == "ArrowRight"){
        if (collision_detector_with_playground_borders(rectangle, "right") == false){
        CTX.clearRect(0,0, CANVAS.width, CANVAS.height)
        rectangle.current_x_position += 10
        rectangle.draw()
        platform.draw()

        }
        if (collision_detector_with_playground_borders(rectangle, "right")){                  
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height);
            rectangle.current_x_position -= 8
            rectangle.draw()
            platform.draw()
        }
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

