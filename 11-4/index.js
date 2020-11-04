console.log('canvas')


//We always start with this
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//We set the width and height of our canvas to our window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// console.log(ctx)
ctx.fillStyle = 'red';
// //x, y, w, h 
// ctx.fillStyle = 'blue'
// ctx.fillRect(canvas.width - 100, 0, 100, 100)
// ctx.clearRect(50, 130, 20, 50)


//In order to load images
let img = new Image()
img.src = 'robojess.png'
img.onload = function () {
    ctx.drawImage(img, 100, 100, 20, 20)
}


let girl = {
    x: 0,
    y: 0,
    h: 100,
    w: 100
}

let square = {
    x: 400,
    y: 200,
    w: 300,
    h: 300,
    color: 'blue'
}

function drawSquare() {
    square.x -= .5;
    square.y -= .5;
    ctx.fillStyle = square.color
    ctx.fillRect(square.x, square.y, square.w, square.h)
}

function detectCollision() {
    //console.log(square, girl)
    if (square.x < girl.x + girl.w &&
        square.x + square.w > girl.x &&
        square.y < girl.y + girl.h &&
        square.y + square.h > girl.y) {
        // collision detected!
        console.log("collision!!!")
        window.cancelAnimationFrame(id)
    }
}

let id = null;
//Game engine -- infinte loop 
function animate() {
    id = window.requestAnimationFrame(animate)

    //Clear the entire board first.. Changes the page 
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    //Draw everything else again, a little differnt 
    ctx.drawImage(img, girl.x, girl.y, 100, 100)
    drawSquare()
    girl.x += .5;
    girl.y += .5;

    detectCollision()

}
animate()
