class App
{
    runApplication()
    {
        console.log("hello world!");

    }
}
class Greet
{
    constructor()
    {
        console.log("Greetings!");
    }
}

class Goodbye
{
    constructor()
    {
        console.log("Bye bye!");
    }
}


let greet = new Greet();
let bye = new Goodbye();
let app = new App();
app.runApplication();