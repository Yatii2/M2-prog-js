class App
{
    runApplication()
    {
        console.log("hello world!");

        let dino = new Dino("T-rex",true,20);
        let plantenEter = new Dino ("Triceratops",false,20);
        console.log(dino);
        console.log(plantenEter);
        
        dino.eatFood(plantenEter);
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft);
        
    }
}
class Dino
{
    constructor(naam)
    {
        this.naam = naam;
        this.vleeseter = true;
        this.leeftijd = 20;
        this.leeft = true;
        this.honger = true;
       
    }
    eatFood(foodToEat)
    {
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een " + this.naam)
        console.log("mijn honger: " + this.honger)
    }
}


let app = new App();
app.runApplication();