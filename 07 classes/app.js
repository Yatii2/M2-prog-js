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
    }
    
    showGreeting()
    {
        console.log("Greetings!");
    }
}

class Goodbye
{
    constructor()
    {
    }

    showGoodbye()
    {
        console.log("Bye bye!");
    }
}


let greet = new Greet();
greet.showGreeting();
let bye = new Goodbye();
bye.showGoodbye();
let app = new App();
app.runApplication();

greet.showGreeting();
bye.showGoodbye();

greet.showGreeting();
bye.showGoodbye();

greet.showGreeting();
bye.showGoodbye();