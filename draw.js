var XGridSpacing = 50;
var YGridSpacing = 50;

var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');


function plot() {
    axis();
    grid();


}

function trackMouse(event) {
    for (var i = 0; i <numberGraphs.length; i++) {
        numberGraphs[i].mouseSnap(event);

    }
}

function axis() {
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "1";
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, canvas.width / 2);
    ctx.lineTo(0, -canvas.width / 2);
    ctx.stroke();
}

function grid() {

    //horizontal
    ctx.beginPath();
    ctx.strokeStyle = "#009933";
    ctx.lineWidth = "1";
    for (var i = YGridSpacing; i < canvas.height; i += YGridSpacing) {


        ctx.moveTo((-canvas.width / 2), i);
        ctx.lineTo(canvas.width, i);
        ctx.moveTo((-canvas.width / 2), -i);
        ctx.lineTo(canvas.width, -i);

        ctx.font = "20px Arial";
        ctx.fillText((i / YGridSpacing), 0, -i);
        ctx.fillText("-" + (i / YGridSpacing), 0, i);
    }
    //vertical
    for (var i = XGridSpacing; i <= canvas.width; i += XGridSpacing) {
        ctx.moveTo(i, (canvas.height / 2));
        ctx.lineTo(i, -canvas.height);
        ctx.moveTo(-i, (canvas.height / 2));
        ctx.lineTo(-i, -canvas.height);

        ctx.fillText((i / XGridSpacing), i, 0);
        ctx.fillText("-" + (i / XGridSpacing), -i, 0);
    }
    ctx.stroke();
}


