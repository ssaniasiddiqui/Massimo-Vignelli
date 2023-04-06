newFunction();

function newFunction() {
    var redBall = document.querySelector(".red");
    document.querySelector("body").addEventListener("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;
        redBall.style.left = x + "px";
        redBall.style.top = y + "px";
    });
}


