class App
{
    runApplication()
    {
        console.log("hello world!");

        let dino = new Dino("T-rex",true,20);
        console.log(dino);
        console.log("de leeftijd van deze " + dino.naam + " is: " + dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees: " + dino.vleeseter);
    }
}
class Dino
{
    constructor(naam)
    {
        this.naam = "T-rex";
        this.vleeseter = true;
        this.leeftijd = 20;

       
    }
}


let app = new App();
app.runApplication();