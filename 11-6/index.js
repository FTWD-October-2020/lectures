const canvas = document.querySelector('#coin')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;
const image = new Image()
// image.src = `./frame-sprite-animation.png`
image.src = `./coin-sprite-animation-sprite-sheet.png`

console.log(image.width)
console.log(image.height)

image.onload = animate

//(imageObject, x, y, w, h, desX, desY, desW, desH
// ctx.drawImage(image, 0, 0)


let x = 0
let numImg = 10

function animate() {
    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (x >= image.width) {
        x = 0
    }
    ctx.drawImage(image, x, 0, image.width / numImg, image.height, 0, 0, image.width / numImg, image.height)

    console.log('loop')
}


setInterval(function () {
    x += image.width / numImg
}, 100)

