let _context = undefined;
let _lastTimestamp = undefined;

function tick(deltaTime) {
    // State update code goes here...
}

function draw(context) {
    // Rendering and drawing code goes here...
}

function mainLoop(timestamp) {
    const deltaTime = _lastTimestamp - timestamp;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    tick(deltaTime);
    draw(context);

    _lastTimestamp = timestamp;
    window.requestAnimationFrame(mainLoop);
}

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    _lastTimestamp = performance.now();
    window.requestAnimationFrame(gameLoop);
});