const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

const roadImg = new Image()
roadImg.src = `./images/road.png`

//Three objects that we can manipulate
let road = { x: 0, y: 0, w: canvas.width, h: canvas.height }






// let car = { x: (canvas.width / 2) - (40), y: canvas.height - 140, w: 80, h: 140 }





class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.bullets = []
  }
  shootGun = () => {
    console.log('shoot')
    //Make a new bullet when we shoot 
    let bullet = {
      x: this.x + (this.w / 2), y: this.y, w: 10, h: 20
    }
    //Push to our bullets array
    this.bullets.push(bullet)
  }
}



let car = new Car((canvas.width / 2) - (40), canvas.height - 140, 80, 140)



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
    case ' ':
      car.shootGun()
      break;
  }
}





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








const allObstacles = []

class Obstacle {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color
  }
  shapeShift = () => {
    setInterval(() => {
      //console.log('ShapeShift', this.color)
      this.color = "#" + ((1 << 24) * Math.random() | 0).toString(16)
      this.w += 10
    }, 777)
  }
}


setInterval(function () {
  //console.log('push obstacle to array')

  let newObs = new Obstacle(Math.random() * canvas.width - 50, 0, 100, 50, "#" + ((1 << 24) * Math.random() | 0).toString(16))
  newObs.shapeShift()
  allObstacles.push(newObs)

}, 3000)



function drawBullets() {
  for (let bullet of car.bullets) {
    bullet.y -= 10
    ctx.fillStyle = 'silver'
    ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h)
  }
}

function detectCollisionBullet(obs) {
  let i = 0;
  for (let bullet of car.bullets) {
    if (bullet.x < obs.x + obs.w &&
      bullet.x + bullet.w > obs.x &&
      bullet.y < obs.y + obs.h &&
      bullet.y + bullet.h > obs.y) {
      // collision detected!
      console.log('collision detected with Bullet!', i)
      console.log(car.bullets)
      // car.bullets.splice(i, 1)
      allObstacles.splice(allObstacles.indexOf(obs), 1)
      i++;

    }
  }
}

function detectCollision(obs) {
  if (car.x < obs.x + obs.w &&
    car.x + car.w > obs.x &&
    car.y < obs.y + obs.h &&
    car.y + car.h > obs.y) {
    // collision detected!
    //console.log('collision!')
    cancelAnimationFrame(animationId)
    //alert(`Score is ${score}`)
    //window.location.reload()
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
    //console.log(speed)
    obs.y += speed
    ctx.fillRect(obs.x, obs.y, obs.w, obs.h)

    detectCollision(obs) //Detect if obs hit a car
    detectCollisionBullet(obs) //Detect if obs hit a bullet
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
  drawBullets()
}
animate()
