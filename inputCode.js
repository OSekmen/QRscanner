var content = "http://wes.casio.com/math/index.php?q=I-235F+U-000C00090252+M-C10000AD00+S-001510100000100E1010B0005F8F+R-0125000000000000010200000000000000000000+E-3548C91A331B";
var QRinput;
var functie = "";

function decode(content) {
     //scanner enable
    var dict = {
        data: [
            { code: "30", value: "0" },
            { code: "31", value: "1" },
            { code: "32", value: "2" },
            { code: "33", value: "3" },
            { code: "34", value: "4" },
            { code: "35", value: "5" },
            { code: "36", value: "6" },
            { code: "37", value: "7" },
            { code: "38", value: "8" },
            { code: "39", value: "9" },
            { code: "21", value: "e" },
            { code: "22", value: "pi"},
            { code: "2D", value: "E" },
            { code: "2E", value: "." },
            { code: "48", value: "x" },
            { code: "C91A", value: "^" }
            //{ code: "1B", value: "!END" }

        ]
    };
    var scanned = [];

    
    QRinput = content.slice(content.indexOf("E-") + 2, content.length);
    console.log(QRinput);

    var buffer = "";
    for (var i = 0; i <= QRinput.length; i++) {

        buffer = buffer + QRinput.substring(i, i + 1);
        

        for (var j = 0; j < dict.data.length; j++) {
            if (buffer == dict.data[j].code) {
                console.log(dict.data[j].value);
               // functie = functie + dict.data[j].value;
                scanned.push(dict.data[j].value );
                buffer = buffer.replace(buffer, "");
                
            }
            
        }
       //console.log(buffer);
      
    }
    console.log(scanned);

    //converter without eval
    
    var term = "";
    for (var i = 0; i < scanned.length; i++) {     
        switch (scanned[i]) {
            case '^':
                term += "Math.pow(" + scanned[i - 1] + "," + scanned[i + 1] + ");";
                functie += term;
                term = "";
                break;
        }
    }
    
    console.log(functie);
    plot();
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
                canvasElement.style.visibility = "hidden";

            }
        }
        requestAnimationFrame(tick);
    }


}

