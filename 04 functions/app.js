function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
argumentsAreHandy("Super Shout out");
argumentsAreHandy("Wow omg");
argumentsAreHandy("Shouting out");


function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mi overal aanroepen");
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
    }
}

let app = new App();
app.runApplication();