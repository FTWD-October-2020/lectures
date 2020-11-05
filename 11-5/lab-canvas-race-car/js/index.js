const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

const roadImg = new Image()
roadImg.src = `./images/road.png`

//Three objects that we can manipulate
let road = { x: 0, y: 0, w: canvas.width, h: canvas.height }

let car = { x: (canvas.width / 2) - (40), y: canvas.height - 140, w: 80, h: 140 }



//Need to wait until image loads before drawing.  
roadImg.onload = function () {
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
}

const carImg = new Image()
carImg.src = `./images/car.png`

//Need to wait until image loads before drawing.  
carImg.onload = function () {
  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)
}









//Our controls
window.onkeydown = function (event) {
  //Change object depending on what key i hit
  switch (event.key) {
    case 'ArrowLeft':
      car.x -= 10
      break;
    case 'ArrowRight':
      car.x += 10
      break;
    case 'ArrowUp':
      car.y -= 10
      break;
    case 'ArrowDown':
      car.y += 10
      break;
  }
}




const allObstacles = []


setInterval(function () {
  console.log('push obstacle to array')

  let newObs = {
    x: Math.random() * canvas.width - 50,
    y: 0,
    w: 100,
    h: 50,
    color: "#" + ((1 << 24) * Math.random() | 0).toString(16)
  }

  allObstacles.push(newObs)

}, 3000)


function detectCollision(obs) {
  if (car.x < obs.x + obs.w &&
    car.x + car.w > obs.x &&
    car.y < obs.y + obs.h &&
    car.y + car.h > obs.y) {
    // collision detected!
    console.log('collision!')
    cancelAnimationFrame(animationId)
    alert(`Score is ${score}`)
    window.location.reload()
  }
}



let score = 1000;
let speed = 2

function drawObstacle() {
  // let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
  // obstacle.color = randomColor

  //Loop thru all obstacles
  for (let obs of allObstacles) {
    ctx.fillStyle = obs.color
    console.log(speed)
    obs.y += speed
    ctx.fillRect(obs.x, obs.y, obs.w, obs.h)
    detectCollision(obs)
    //Removes when passed car/road 
    if (obs.y > canvas.height) {
      score += 1000
      speed += 1
      allObstacles.shift()
    }
  }

}





let animationId = null

//Animate == Takes a function as an argument 
//Cleared and drawn again
function animate() {
  animationId = requestAnimationFrame(animate)
  //Clear the whole board 
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //Redraw everything 
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)

  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)

  drawObstacle() // detectCollision()

}
animate()
