class App
{

    runApplication()
    {
        console.log("hello word!");
        let canvas = document.getElementById("canvaId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        console.log(canvas);

    }
}

let app = new App();
app.runApplication();