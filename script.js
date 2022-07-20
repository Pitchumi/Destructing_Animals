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

class Moving_object {
    constructor(pos_x, pos_y, color) {
        this.pos_x = pos_x
        this.pos_y = pos_y
        this.color = color
    }

    get_current_position(){
        console.log("posx:" + this.pos_x + "posy" + this.pos_y)
    }

}

rectangle = new Moving_object(20,20,"red")
// MAIN

        function main() // Gameloop
        {
            // PROCESS (fun todo) - Do the maths here
            CTX.clearRect(0,0, CANVAS.width, CANVAS.height); // This clean the canvas at each frame
                       
            // DRAW (fun todo) - Draw everything here
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

main();