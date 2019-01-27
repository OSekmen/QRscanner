var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");
var Zcanvas = document.getElementById("layer");
var ctz = Zcanvas.getContext("2d");

window.onload = function () {


    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    scanQR(); //use camera
    //decode(content); //use build in template
    trackMouse();
    
}

function calc(x) {
    return (eval(functie));
}

function reverseX(xCan) {
    //returns pixel value of canvas
    return xCan * XGridSpacing + (canvas.width / 2);
}
function reverseY(yCan) {
    //returns pixel value of canvas
    return -yCan * YGridSpacing + (canvas.height / 2);
}
function reverseXSnap(xCan) {
    //returns pixel value of canvas
    return Math.round(xCan) * XGridSpacing + (canvas.width / 2);
}
function reverseYSnap(yCan) {
    //returns pixel value of canvas
    return Math.round(-yCan) * YGridSpacing + (canvas.height / 2);
}


function trackMouse(event) {
    
    var xPix = event.pageX;
    var yPix = event.pageY;
    var xCan = ((xPix / XGridSpacing) - ((canvas.width / 2) / (XGridSpacing)));
    var yCan = -((yPix / YGridSpacing) - ((canvas.height / 2) / (YGridSpacing)));
    ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    if (Math.abs(xCan - Math.round(xCan) < 0.3) && Math.abs(yCan - Math.round(calc(xCan))) < 2) {
        ctz.beginPath();
        ctz.arc(reverseXSnap(xCan), reverseYSnap(calc(Math.round(xCan))), 5, 0, 2 * Math.PI);
        ctz.stroke();
    }
    
    /*
    if ((Math.abs(xCan - Math.round(xCan)) < 0.5) &&
        (Math.abs(yCan - Math.round(yCan))) < 0.5 &&
         (Math.abs(yCan- calc(xCan))) < 0.5) {
        ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
        ctz.beginPath();
        ctz.arc(reverseXSnap(xCan), reverseYSnap(yCan), 5, 0, 2 * Math.PI);
        ctz.stroke();
    }*/
    /*snap to all grid points
    if ((Math.abs(yCan - Math.round(yCan)) < 0.3) && (Math.abs(xCan - Math.round(xCan)) < 0.3)) {
        ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
        ctz.beginPath();
        ctz.arc(reverseXSnap(xCan), reverseYSnap(yCan), 5, 0, 2 * Math.PI);
        ctz.stroke();
    }*/
    
}









    


