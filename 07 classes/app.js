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
        this.greeting = "Greetings!";
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
        this.farewell = "Bye bye!";
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

greet.showGreeting();
bye.showGoodbye();

greet.showGreeting();
bye.showGoodbye();

greet.showGreeting();
bye.showGoodbye();

console.log("greetings van buiten: "+greet.greeting);
console.log("goodbye van buiten: "+bye.farewell);

let app = new App();
app.runApplication();