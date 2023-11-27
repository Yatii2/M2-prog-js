class App
{

    runApplication()
    {
        console.log("hello word!");
        let canvas = document.getElementById("canvaId");
        let g = canvas.getContext("2d");
        

        //dak//
        g.beginPath();
        g.fillStyle = "#622";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.moveTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        //muur
        g.beginPath()
        g.fillStyle = "white"; 
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()
         
        //deur muur
        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        //raam
       
        g.beginPath()
         let randomGetal = Math.random();
        if(randomGetal < 0.5){
            g.fillStyle = "yellow";
        }else{
            g.fillStyle = "black";
        }
        console.log(randomGetal)
        g.moveTo(300,500);
        g.lineTo(500,550);
        g.lineTo(500,400);
        g.lineTo(300,350);
        g.closePath();
        g.stroke();
        g.fill()
        
        //deur
        g.beginPath()
        g.fillStyle = "#562b00";
        g.moveTo(700,550);
        g.lineTo(700,400);
        g.lineTo(750,378);
        g.lineTo(750,525);
        g.closePath();
        g.stroke();
        g.fill()

        console.log(canvas);
    }
}

let app = new App();
app.runApplication();