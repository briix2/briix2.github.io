$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(200, 450, 115, 20); //short but wide platform located 340 pixels from the left of the screen and 440 pixels from the top  of the screen 
    createPlatform(680, 500, 115, 20); //short but wide platform located 680 pixels from the left of the screen and 460 pixels from the bottom of the screen
    createPlatform(540, 260, 120, 20); //short but wide platform located 540 pixels from the right of the screen and 300 pixels from the bottom of the screen 
    createPlatform(230, 640, 115, 20); //short but wide platform located 230 pixels from the left  of the screen and 655 pixels from the top of the screen
    createPlatform(200, 230, 130, 20); //short but wide platform located 200 pixels from the left of the screen and 600 pixels from the top of the screen 
    createPlatform(800, 250, 110, 20); //short but wide platform located 800 pixels from the left of the screen and 320 pixels from the top of the screen 
    createPlatform(500, 540, 115, 20); //short but wide platform located 500 pixels from the left of the screen and     pixels from the bottom of the screen

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 260 , 560, 50, 0.7); //creates a "steve" collectable at the coordinates (250, 400), falling with high gravity of 20, and bouncing with 70% bounce
    createCollectable("grace", 580, 200); //creates a "grace" collectable at the coordinates (400, 300), falling with default gravity and bouncing with defualt bounce %
    createCollectable("max", 230, 100, 0.5); //creates a "max" collectable at the coordinates (200, 300), falling with default gravity and bouncing with 50% bounce  
    createCollectable("kennedi", 700, 400); //creates a "kennedi" collectable at the coordinates (650, 200), falling high gravity of 20, and bouncing with defualt bounce %
    createCollectable("database", 830, 150 ); //creates a "database" collectable at the coordinates (860, 150), falling high gravity of 20 and bouncing with default bounce %
   
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannons("left", 600, 100); // cannon on left wall, 600px down, shooting once per second
    createCannons("right", 300, 1000); // cannon on right wall, 300px down , shooting once per second
    createCannons("left", 800, 500); // cannon on left wall, 800px down, shooting once per second


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
