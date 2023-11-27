class App
{
    runApplication()
    {
        console.log("hello world!");

        let title = document.getElementById("newstitle");
        console.log(title);

        let randomNum = Math.random();
        console.log(randomNum);
        if(randomNum < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        }
        if(randomNum > 0.2 && randomNum < 0.6)
        {
            title.style.backgroundColor = "blue";
        }
        if(randomNum > 0.2 && randomNum < 0.75)
        {
            title.style.backgroundColor = "green";
        }
        if(randomNum > 0.75)
        {
            title.style.backgroundColor = "yellow";
        }

        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem1);
        if(randomNum < 0.7){
            console.log("???");
            newsitem1.style.backgroundColor = "pink"
        }


    }
}

let app = new App();
app.runApplication();