// CANVAS INIT
const CANVAS = document.getElementById("game");
const CTX = CANVAS.getContext("2d"); // Context, to use to draw in

//CONST
const TILE_SIZE = 64;
const WINDOW_WIDTH = CANVAS.width;
const WINDOW_HEIGHT = CANVAS.height;
const WINDOW_X_CENTER = CANVAS.width / 2;
const WINDOW_Y_CENTER = CANVAS.height / 2;
const PLAYER_JUMP_HEIGHT = 20;

// TILEMAP TESTING CONST
const TESTMAP = [1, 1, 1, 2, 2, 1, 1, 1, 1, 5, 3, 1, 1, 4, 5, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 2, 2, 3, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// A tilemap is just an array of index representing an object to draw in a grid.
// As it is written in one line, the programmer has to split it in manner to represent the Y axis.
// So this requires to know the width and the height of it. 
const TESTMAP_WIDTH = 8;
const TESTMAP_HEIGHT = 8;
/*--- Object represented per index */
const TILE_VOID = 1; // When there's just no object at all.
const TILE_BLOCK = 2; // Basically a platform
const TILE_RED = 3; // Unused
const TILE_BLUE = 4; // Unused
const TILE_GREEN = 5; // Unused

//VAR
var jumping = false;

//CLASSES

class Tilemap
{
    constructor()
    {
        this.map = TESTMAP;
        this.width = TESTMAP_WIDTH;
        this.height = TESTMAP_HEIGHT;
        this.x_pos = 0;
        this.y_pos = 0;
        this.sprite = new Sprite
        (
            this.x_pos,
            this.y_pos,
            TILE_SIZE,
            TILE_SIZE,
            "black"
        );
    }
}

/**
 * Player's character in Collect mode
 * @constructor
 * @param {Number} countRed - The ammount of red collected.
 * @param {Number} countBlue - The ammount of blue collected.
 * @param {Number} countGreen - The ammount of green collected.
 */
class Platformer_Player
{
    constructor(countRed, countBlue, countGreen)
    {
        this.x_pos = WINDOW_X_CENTER - (TILE_SIZE/2); // WINDOW CENTER
        this.y_pos = WINDOW_Y_CENTER - (TILE_SIZE/2); // WINDOW CENTER
        this.sprite = new Sprite
        (
            this.x_pos,
            this.y_pos,
            TILE_SIZE,
            TILE_SIZE,
            "black"
            );
            this.countRed = countRed;
            this.countBlue = countBlue;
            this.countGreen = countGreen;
            this.isJumping = false;
            this.jumpHeight = -PLAYER_JUMP_HEIGHT;
            this.jumpGravity = 1;
            this.jumpVec = 0;
        }
        checkCollision()
        {
            if ((this.y_pos + TILE_SIZE) >= WINDOW_HEIGHT) // On collision with the ground
            {
                this.jumpVec = 0;
                this.isJumping = false;
                this.y_pos = WINDOW_HEIGHT - TILE_SIZE;
            }
        }
        jump()
        {
            if (!this.isJumping)
            {
                this.jumpVec = this.jumpHeight;
                this.isJumping = true;
            }
        }
        move()
        {
            this.jumpVec += this.jumpGravity;
            this.y_pos += this.jumpVec;
        }
        process()
        {
            this.move();
            this.checkCollision();
            this.sprite.y_pos = this.y_pos;
        }
    }
    
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
            this.x_pos = x_pos;
            this.y_pos = y_pos;
            this.height = height;
            this.width = width; 
            this.color = color;
        }
        
        get current_x_position(){
            return this.x_pos;
        }
        
        get current_y_position(){
            return this.y_pos;
        }
        
        set current_x_position(new_x_pos){
            this.x_pos = new_x_pos;
        }
        
        set current_y_position(new_y_pos){
            this.y_pos = new_y_pos;
        }
        
        draw(){
            CTX.fillStyle = this.color;
            CTX.strokeRect(this.x_pos, this.y_pos, this.height, this.width);
            return CTX;
        }
        
    }
    
    //OBJECTS INIT
    var player = new Platformer_Player(0,0,0);
    var testmap = new Tilemap();
    
    
    // INPUT MANAGER
    /*
    document.addEventListener("mousedown", mouseListener, false); // Called when user interact with the mouse (usually on mouse click)
    document.addEventListener("mousemove", mouseListener, false); // Called when the mouse is moving
    function mouseListener(event) // What to do then 
    {
        console.log(event);
    }
    */
   document.addEventListener("keydown", eventManager, false);
   function eventManager(event)
{
    if (event.key == "ArrowUp"){
        player.jump();
    }
}

// MAIN

function process()
{
    player.process();
}

/**
 * Will draw all the objects in one function, don't forget to put new object here
 */
function draw(){
    player.sprite.draw();
    // TESTING A TILEMAP DRAW
    // A lot of comment so you can understand it
    for (let y = 0 ; y < testmap.height ; y++) // Y axis of the tilemap (height).
    {
        for (let x = 0 ; x < testmap.width ; x++) // X axis of the tilemap (width).
        {
            if (testmap.map[x + (testmap.height*y)] == TILE_BLOCK)
            // Checks every index value.
            // If it's equal to TILE_BLOCK value, it means it's a wall/ground block (to draw).
            /* width = 8 ; height = 8 :
            [ ] [ ] [ ] [X] [X] [ ] [ ] [ ] y = 0 -> (0*y) + x
            [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] y = 1 -> (1*y) + x
            [X] [X] [ ] [ ] [ ] [ ] [X] [X] y = 2 -> (2*y) + x
            [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] y = 3 -> (3*y) + x
            [ ] [ ] [ ] [X] [X] [ ] [ ] [ ] y = 4 -> (4*y) + x
            [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] y = 5 -> (5*y) + x
            [X] [X] [ ] [ ] [ ] [ ] [X] [X] y = 6 -> (6*y) + x
            [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] y = 7 -> (7*y) + x
            */
            {
                testmap.sprite.current_x_position = testmap.x_pos + x * TILE_SIZE;
                testmap.sprite.current_y_position = testmap.y_pos + y * TILE_SIZE;
                testmap.sprite.draw();
            }
        }
    }
}

function main() // Gameloop
{
            // PROCESS (fun todo) - Do the maths here
            process();

            // TESTING A TILEMAP SCROLLING
            testmap.x_pos -= 1; // Makes the whole thing slide to the left.
            if (testmap.x_pos < WINDOW_X_CENTER - WINDOW_WIDTH)
            // When it reaches the negative middle of the window (-512).
            {
                testmap.x_pos = WINDOW_WIDTH; // Teleported to the right of the screen (1024).
            }

            
            // DRAW (fun todo) - Draw everything here
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height); // This clean the canvas at each frame
            draw();

            // Loop
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

main();