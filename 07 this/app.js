class App
{
    runApplication()
    {
        console.log("hello world!");
        let sunny = new User("SunnyDreamer");
        let swift = new User("SwiftBreeze");
        let cozy = new User("CozyPixel");
        let blaze = new User("BlazeJumper");
        let aqua = new User("AquaWhisper");
        let luna = new User("LunaGlider");
    }
}

class User
{
    constructor(name)
    {
        this.name = name;
    }

    wieBenIk()
    {
        console.log(this.naam)
    }
}

let app = new App();
app.runApplication();