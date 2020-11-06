

// <canvas id="bg" width="640" height="320"></canvas>
// <button id="btnStart" class="btn btn-default">Start/stop animation</button>
// <script src="background.js"></script>

(function () {
    window.requestAnimationFrame = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || function (callback) { window.setTimeout(callback, 1000 / 60); };

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var looping = false;
    var totalSeconds = 0;

    var img = new Image();
    img.onload = imageLoaded;
    img.src = 'download.jpg'

    function imageLoaded() {
        draw(0);

        //var btn = document.getElementById('btnStart');
        //btn.addEventListener('click', function () {
        startStop();
        //});
    }

    var lastFrameTime = 0;

    function startStop() {
        looping = !looping;

        if (looping) {
            lastFrameTime = Date.now();
            requestAnimationFrame(loop);
        }
    }

    function loop() {
        if (!looping) {
            return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height)

        requestAnimationFrame(loop);

        var now = Date.now();
        var deltaSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;
        draw(deltaSeconds);


        if (x >= image.width) {
            x = 0
        }
        context.drawImage(image, x, 0, image.width / numImg, image.height, 0, 0, image.width / numImg, image.height)

        console.log('loop')
    }

    function draw(delta) {
        totalSeconds += delta;

        var vx = 100; // the background scrolls with a speed of 100 pixels/sec
        var numImages = Math.ceil(canvas.width / img.width) + 1;
        var xpos = totalSeconds * vx % img.width;

        context.save();
        context.translate(-xpos, 0);
        for (var i = 0; i < numImages; i++) {
            context.drawImage(img, i * img.width, 0);
        }
        context.restore();
    }




    const image = new Image()
    // image.src = `./frame-sprite-animation.png`
    image.src = `./coin-sprite-animation-sprite-sheet.png`

    console.log(image.width)
    console.log(image.height)


    //(imageObject, x, y, w, h, desX, desY, desW, desH
    // ctx.drawImage(image, 0, 0)


    let x = 0
    let numImg = 10




    setInterval(function () {
        x += image.width / numImg
    }, 100)


}());