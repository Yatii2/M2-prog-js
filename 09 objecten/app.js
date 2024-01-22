class App
{
    runApplication()
    {
        console.log("hello world!");

        let magickaart= {
            attack:3,
            defense: 2,
            name: "basic creature",
            cost: ["1R","1B"],
            text: "This basic creature is better at attacking",
        };
        console.log("you play: " + magickaart.name);
        console.log("This " + magickaart.name + magickaart.text);
        console.log(magickaart.name + " has " + magickaart.attack + " attack");
        console.log(magickaart.name  + " has " + magickaart.defense + " defense");
        console.log("you paid: " + magickaart.cost );



    }
}

let app = new App();
app.runApplication();