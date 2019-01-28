var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");


window.onload = function () {


    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    //scanQR(); //use camera
    decode(content); //use build in template
    
    
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


function trackMouse() {
    
   
    
}









    


