var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");

window.onload = function () {



    ctx.translate(canvas.width / 2, canvas.height / 2);
    scanQR(); //use camera
    //decode(content); //use build in template
    trackMouse();
}

function calc(x) {
    return (eval(functie));
}

function trackMouse(event) {
    var xPix = event.pageX - 10;
    var yPix = event.pageY - 10;
    var xCan = ((xPix / XGridSpacing) - ((canvas.width / 2) / (XGridSpacing)));
    var yCan = -((yPix / YGridSpacing) - ((canvas.height / 2) / (YGridSpacing)));
    console.log(xPix, yPix);
    ctx.beginPath();
    ctx.arc(xPix - canvas.width / 2, yPix - canvas.height / 2, 5, 0, 2 * Math.PI)
    ctx.stroke();
    
}









    


