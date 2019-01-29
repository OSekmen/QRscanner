var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");


var Zcanvas = document.getElementById("layer");
var ctz = Zcanvas.getContext("2d");

var button1 = new Button();

var numberGraphs = [];


window.onload = function () {


    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    //scanQR(); //use camera
    //decode(content); //use build in template
    plot();
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










    


