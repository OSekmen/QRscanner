var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");
var Zcanvas = document.getElementById("layer");
var ctz = Zcanvas.getContext("2d");

window.onload = function () {



    ctx.translate(canvas.width / 2, canvas.height / 2);
    //scanQR(); //use camera
    decode(content); //use build in template
    trackMouse();
}

function calc(x) {
    return (eval(functie));
}

function trackMouse(event) {

    var xPix = event.pageX;
    var yPix = event.pageY;
    var xCan = ((xPix / XGridSpacing) - ((canvas.width / 2) / (XGridSpacing)));
    var yCan = -((yPix / YGridSpacing) - ((canvas.height / 2) / (YGridSpacing)));
    console.log(xPix, yPix);
    ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    ctz.beginPath();
    ////snap on graph points
       ctz.arc(xPix, yPix, 5, 0, 2 * Math.PI);
    ctz.stroke();
    
}









    


