class App
{

    runApplication()
    {
        console.log("hello word!");
        let canvas = document.getElementById("canvaId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.moveTo(200,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,500);
        g.lineTo(500,550);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,500);
        g.lineTo(300,350);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(500,550);
        g.lineTo(500,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,350);
        g.lineTo(500,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,350);
        g.lineTo(500,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(700,550);
        g.lineTo(700,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(750,378);
        g.lineTo(700,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(750,520);
        g.lineTo(750,380);
        g.closePath();
        g.stroke();
        g.fill()

        console.log(canvas);
    }
}

let app = new App();
app.runApplication();