class Graph {
    
    constructor(functie) {
        var data = { Xpix: [], Ypix: [], Xreal: [], Yreal: [] };
        var Zcanvas = document.createElement("canvas");
        var ctz = Zcanvas.getContext("2d");
        this.data = data;
        this.functie = functie;
        this.ctz = ctz;
        this.Zcanvas = Zcanvas;
    }
    
    calc(x) {
    return (eval(this.functie));
    }

    calculate() {
        
        //add all x values to array
        var min = -canvas.width / 2;
        var max = canvas.width / 2;
        for (var i = min; i < max; i += 1) {
            this.data.Xpix.push(i);
            this.data.Xreal.push((i / XGridSpacing));
        }
        
        //calculate all Y values & add to array
        for (var i = 0; i < this.data.Xpix.length; i++) {
            this.data.Ypix.push(this.calc(this.data.Xpix[i]));
            this.data.Yreal.push(this.calc(this.data.Xreal[i]));
        }

    }

    update() {

        ctx.scale(1, -1);
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#2818bc";
        for (var i = 0; i < this.data.Xreal.length; i++) {
            ctx.lineTo(this.data.Xreal[i] * XGridSpacing, this.data.Yreal[i] * YGridSpacing);
        }
        ctx.stroke();
        ctx.scale(1, -1);

    }


    ///bezig met tracking mouse
    mouseSnap() {
        
        
        this.Zcanvas.id = "layer";
        this.Zcanvas.className = "infoCanvas"
        this.Zcanvas.addEventListener("click", trackMouse())

        
    }

    trackMouse() {
        var xPix = event.pageX;
        var yPix = event.pageY;
        var xCan = ((xPix / XGridSpacing) - ((canvas.width / 2) / (XGridSpacing)));
        var yCan = -((yPix / YGridSpacing) - ((canvas.height / 2) / (YGridSpacing)));

        var x = reverseXSnap(xCan);
        var y = reverseYSnap(this.calc(Math.round(xCan)));

        ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        if (Math.abs(xCan - Math.round(xCan) < 0.3) && Math.abs(yCan - Math.round(this.calc(xCan))) < 2) {
            this.ctz.beginPath();
            this.ctz.arc(reverseXSnap(xCan), reverseYSnap(this.calc(Math.round(xCan))), 5, 0, 2 * Math.PI);
            this.ctz.font = "50px Arial";
            this.ctz.fillText("(" + String(Math.round(xCan)) + ", " + String(this.calc(Math.round(xCan))) + ")", x + 50, y - 50);
            this.ctz.stroke();
        }
        console.log("aaa")
    }
    /*
    mouseSnapAllX(event) {

        var xPix = event.pageX;
        var yPix = event.pageY;
        var xCan = ((xPix / XGridSpacing) - ((canvas.width / 2) / (XGridSpacing)));
        var yCan = -((yPix / YGridSpacing) - ((canvas.height / 2) / (YGridSpacing)));

        if ((Math.abs(yCan - Math.round(yCan)) < 0.3) && (Math.abs(xCan - Math.round(xCan)) < 0.3)) {
            ctz.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
            ctz.beginPath();
            ctz.arc(reverseXSnap(xCan), reverseYSnap(yCan), 5, 0, 2 * Math.PI);
            ctz.stroke();
            ctz.font = "20px Arial";
            ctz.fillText("(" + String(Math.round(xCan)) + ", " + String(calc(Math.round(xCan))) + ")", x + 50, y - 50);
            ctz.stroke();
        }
    }*/
}