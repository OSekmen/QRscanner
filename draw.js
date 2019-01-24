function plot() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var data = { X: [], Y: [] };
    var XGridSpacing = 50;
    var YGridSpacing = 50;

    // ctx.fillStyle = "#dddddd";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    //add all x values to array
    for (var i = -50; i < 50; i += 0.1) {
        data.X.push(i);
    }

    //calculate all Y values & add to array
    for (var i = 0; i < data.X.length; i++) {
        data.Y.push(calc(data.X[i]));
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);



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
    for (var i = XGridSpacing; i < canvas.height; i += XGridSpacing) {


        ctx.moveTo((-canvas.width / 2), i);
        ctx.lineTo(canvas.width, i);
        ctx.moveTo((-canvas.width / 2), -i);
        ctx.lineTo(canvas.width, -i);

        ctx.font = "20px Arial";
        ctx.fillText(i / XGridSpacing, i, 0);
        ctx.fillText("-" + i / XGridSpacing, -i, 0);
    }
    //vertical
    for (var i = YGridSpacing; i < canvas.height; i += YGridSpacing) {
        ctx.moveTo(i, (canvas.height / 2));
        ctx.lineTo(i, -canvas.height);
        ctx.moveTo(-i, (canvas.height / 2));
        ctx.lineTo(-i, -canvas.height);

        ctx.fillText(i / XGridSpacing, 0, i);
        ctx.fillText("-" + i / XGridSpacing, 0, -i);
    }
    ctx.stroke();

    ctx.scale(1, -1);
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#2818bc";
    for (var i = 0; i < data.X.length; i++) {
        ctx.lineTo(data.X[i] * XGridSpacing, data.Y[i] * YGridSpacing);
    }



    ctx.stroke();
    functie = "";
}