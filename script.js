// CANVAS INIT

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d"); // Context, to use to draw in

// INPUT MANAGER

document.addEventListener("mousedown", mouseListener, false); // Called when user interact with the mouse (usually on mouse click)
document.addEventListener("mousemove", mouseListener, false); // Called when the mouse is moving

function mouseListener(event) // What to do then 
{
    console.log(event);
}

// MAIN

        function main() // Gameloop
        {
            // PROCESS (fun todo) - Do the maths here
            ctx.clearRect(0,0, canvas.width, canvas.height); // This clean the canvas at each frame
            // DRAW (fun todo) - Draw everything here
            requestAnimationFrame(main); // This repeats main() as an infinite loop
        }

main();