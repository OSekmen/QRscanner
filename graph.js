class Graph {
    
    constructor(functie, color) {
        var data = { Xpix: [], Ypix: [], Xreal: [], Yreal: [] };
        var state = 0;
        var prevX = 0;
        var prevY = 0;
        this.color = color;
        this.data = data;
        this.functie = functie;
        this.state = state;
        this.prevX - prevX;
        this.prevY = prevY;
        
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
        ctx.strokeStyle = this.color;
        for (var i = 0; i < this.data.Xreal.length; i++) {
            ctx.lineTo(this.data.Xreal[i] * XGridSpacing, this.data.Yreal[i] * YGridSpacing);
            
        }
        ctx.stroke();
        ctx.scale(1, -1);

    }


    mouseSnap(event) {
        var xPix = event.pageX;
        var yPix = event.pageY;
        var xCan = ((xPix / XGridSpacing) - ((Zcanvas.width / 2) / (XGridSpacing)));
        var yCan = -((yPix / YGridSpacing) - ((Zcanvas.height / 2) / (YGridSpacing)));
        var x = reverseXSnap(xCan);
        var y = reverseYSnap(this.calc(Math.round(xCan)));
        
        
        if (Math.abs(xCan - Math.round(xCan) < 0.3) && Math.abs(yCan - Math.round(this.calc(xCan))) < 1) {
            if (this.state ==0) {
                this.prevX = Math.round(xCan);
                this.prevY = this.calc(Math.round(xCan));
                ctz.clearRect(0, 0, Zcanvas.clientWidth, Zcanvas.clientHeight);
                ctz.beginPath();
                ctz.arc(x, y, 5, 0, 2 * Math.PI);
                ctz.fillStyle = this.color
                ctz.font = "50px Arial";
                var text = "(" + String(Math.round(xCan)) + ", " + String(this.calc(Math.round(xCan))) + ")";
                ctz.fillText(text, x - (parseInt(ctx.measureText(text).width) * 1.3), y - 30);
                ctz.stroke();
                console.log(reverseXSnap(xCan), reverseYSnap(this.calc(Math.round(xCan))), this.state)
                this.state =1
            } else {
                if (this.prevX != Math.round(xCan) & this.prevY != this.calc(Math.round(xCan))) {

                    this.state = 0;
                }
                
            }
            
        } 
    }
    //
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