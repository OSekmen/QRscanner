var capture;
var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
var QRinput;
var functie = "";
//var content= "";

    

window.onload = function () {
    
    scanQR();

    
       //  console.log(content);
       // decode();
     //   plot();
    
   
    
   

       
   
}

function calc(x) {

    return (eval(functie));
}




function plot() {
    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");

    //draw axis
    ctx.beginPath();
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "1";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1);
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, canvas.width / 2);
    ctx.lineTo(0, -canvas.width / 2);
   // ctx.closePath();
    ctx.stroke(); 

    //draw grid
    
    var XGridSpacing = 50;
    var YGridSpacing = 50;
    ctx.beginPath();
    ctx.strokeStyle = "#009933";
    ctx.lineWidth = "1";
    //horizontal
    for (var i = XGridSpacing; i < canvas.height; i += XGridSpacing) {
        ctx.moveTo((-canvas.width /2), i);
        ctx.lineTo(canvas.width, i);
        ctx.moveTo((-canvas.width / 2), -i);
        ctx.lineTo(canvas.width, -i);
    }
    //vertical
    for (var i = YGridSpacing; i < canvas.height; i += YGridSpacing) {     
        ctx.moveTo(i, (canvas.height / 2));
        ctx.lineTo(i, -canvas.height);
        ctx.moveTo(-i, (canvas.height / 2));
        ctx.lineTo(-i, -canvas.height);
    }
    //ctx.closePath();
    ctx.stroke();
    

    
    //Graph and data
    var data = { X: [], Y: [] }; 
    //add all x values to array
    for (var i = -50; i < 50; i+= 0.1) {
        data.X.push(i);
    }

   //calculate all Y values & add to array
    for (var i = 0; i < data.X.length; i++) {
        data.Y.push(calc(data.X[i]));
    }

    //draw graph
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#2818bc";
    for (var i = 0; i < data.X.length; i++) {
        ctx.lineTo(data.X[i] * XGridSpacing, data.Y[i] * YGridSpacing);
    }
    ctx.stroke();
}

function scanQR(contentR) {

    Instascan.Camera.getCameras().then(cameras => {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error("Please enable Camera!");
        }
    });
    scanner.addListener('scan', function (content) {
        alert('Do you want to open this page?: ' + content);
        console.log(content);
        //window.open(content, "_blank"); //Open Casio site.
        scanner.stop();
        console.log(content);
        decode(content);
    });

    
}

    


