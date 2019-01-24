var capture;
var content = "http://wes.casio.com/math/index.php?q=I-235F+U-000C00090252+M-C10000AD00+S-001510100000100E1010B0005F8F+R-0125000000000000010200000000000000000000+E-3548C91A321B";
var QRinput;
var functie = "";

    

window.onload = function () {
    scanQR();
    //  console.log(content);
    // decode(content);
    //   plot();
}

function calc(x) {
    return (eval(functie));
}




function plot() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var data = { X: [], Y: [] };
    var XGridSpacing = 50;
    var YGridSpacing = 50;

    //add all x values to array
    for (var i = -50; i < 50; i += 0.1) {
        data.X.push(i);
    }

    //calculate all Y values & add to array
    for (var i = 0; i < data.X.length; i++) {
        data.Y.push(calc(data.X[i]));
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1);

    
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
        ctx.fillText(i, i, 0);
    }
    //vertical
    for (var i = YGridSpacing; i < canvas.height; i += YGridSpacing) {
        ctx.moveTo(i, (canvas.height / 2));
        ctx.lineTo(i, -canvas.height);
        ctx.moveTo(-i, (canvas.height / 2));
        ctx.lineTo(-i, -canvas.height);
    }
    ctx.stroke(); 

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#2818bc";
    for (var i = 0; i < data.X.length; i++) {
        ctx.lineTo(data.X[i] * XGridSpacing, data.Y[i] * YGridSpacing);
    }



    ctx.stroke();
    functie = "";

    functie = "";
}

function scanQR() {
    
    var video = document.createElement("video");
    var canvasElement = document.getElementById("canvas");
    var canvas = canvasElement.getContext("2d");


    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        requestAnimationFrame(tick);
    });
   


    function tick() {

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvasElement.height = video.videoHeight;
            canvasElement.width = video.videoWidth;
            canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
            var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
            var code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
            if (code) {
                decode(code.data);
                video.srcObject.getTracks()[0].stop();
                //canvasElement.style.visibility = "hidden";
                
            }
        }
        requestAnimationFrame(tick);
    }

        
}


    


