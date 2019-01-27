var XGridSpacing = 50;
var YGridSpacing = 50;

var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');

slider1.noUiSlider.on('slide', function () {
    XGridSpacing = parseInt(this.get());
    ctx.clearRect(-canvas.clientWidth / 2, canvas.clientHeight / 2, canvas.clientWidth, -canvas.clientHeight)

    plot();
});

slider2.noUiSlider.on('slide', function () {
    YGridSpacing = parseInt(this.get());
    ctx.clearRect(-canvas.clientWidth / 2, canvas.clientHeight / 2, canvas.clientWidth, -canvas.clientHeight)

    plot();
});

function plot() {
   
    var data = { Xpix: [], Ypix: [], Xreal: [], Yreal: [] };
   

    //add all x values to array
    var min = -canvas.width / 2;
    var max = canvas.width / 2;
    for (var i = min; i < max; i += 1) {
        data.Xpix.push(i);
        data.Xreal.push((i / XGridSpacing));
    }

    //calculate all Y values & add to array
    for (var i = 0; i < data.Xpix.length; i++) {
        data.Ypix.push(calc(data.Xpix[i]));
        data.Yreal.push(calc(data.Xreal[i]));
    }
    
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "1";
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, canvas.width / 2);
    ctx.lineTo(0, -canvas.width / 2);
    ctx.stroke();

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
        ctx.fillText("-" +( i / XGridSpacing), -i, 0);
    }
    ctx.stroke();

    ctx.scale(1, -1);
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#2818bc";
    for (var i = 0; i < data.Xreal.length; i++) {
        ctx.lineTo(data.Xreal[i] * XGridSpacing, data.Yreal[i] * YGridSpacing);
    }
    ctx.stroke();
    ctx.scale(1, -1);
   // functie = "";
}