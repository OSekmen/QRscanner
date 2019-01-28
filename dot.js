class Dot {
   
    constructor() {
    }

    show(xCan) {
        var x = reverseXSnap(xCan);
        var y = reverseYSnap(calc(Math.round(xCan)));

        ctz.beginPath();
        ctz.arc(x, y, 5, 0, 2 * Math.PI);
        ctz.stroke();
        ctz.font = "20px Arial";
        ctz.fillText("(" + String(Math.round(xCan)) + ", " + String(calc(Math.round(xCan))) + ")", x + 50, y - 50);
        ctz.stroke();
    }

}

