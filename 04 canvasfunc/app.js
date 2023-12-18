class App
{

    runApplication()
    {
        console.log("hello word!");
        let canvas = document.getElementById("canvaId");

        let g = canvas.getContext("2d");

        this.tekenHuis(g,30,10);

    }

    tekenHuis(g,x,y){
        //dak//
        g.beginPath();
        g.fillStyle = "#622";
        g.moveTo(300+x,100+y);
        g.lineTo(200+x,300+y);
        g.lineTo(600+x,400+y);
        g.lineTo(700+x,200+y);
        g.lineTo(300+x,100+y);
        g.closePath();
        g.stroke();
        g.fill()
        
        
        g.beginPath()
        g.moveTo(800+x,300+y);
        g.lineTo(700+x,200+y);
        g.closePath();
        g.stroke();
        g.fill()

    


        //muur
        g.beginPath()
        g.fillStyle = "white"; 
        g.moveTo(200+x,300+y);
        g.lineTo(200+x,500+y);
        g.lineTo(600+x,600+y);
        g.lineTo(600+x,400+y);
        g.closePath();
        g.stroke();
        g.fill()
        
        
        //deur muur
        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(600+x,600+y);
        g.lineTo(800+x,500+y);
        g.lineTo(800+x,300+y);
        g.lineTo(600+x,400+y);
        g.closePath();
        g.stroke();
        g.fill()

       
        //raam
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(300+x,500+y);
        g.lineTo(500+x,550+y);
        g.lineTo(500+x,400+y);
        g.lineTo(300+x,350+y);
        g.closePath();
        g.stroke();
        g.fill()
        
       

        //deur
        g.beginPath()
        g.fillStyle = "#562b00";
        g.moveTo(700+x,550+y);
        g.lineTo(700+x,400+y);
        g.lineTo(750+x,378+y);
        g.lineTo(750+x,525+y);
        g.closePath();
        g.stroke();
        g.fill()

        console.log(canvas);
    }
} 
   


let app = new App();
app.runApplication();