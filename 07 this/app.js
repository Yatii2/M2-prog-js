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
        sunny.wieBenIk();//SunnyDreamer goed
        swift.wieBenIk();//SwiftBreeze goed
        cozy.wieBenIk();//CozyPixel goed
        blaze.wieBenIk();//BlazeJumper goed
        aqua.wieBenIk();//AquaWhisper goed
        luna.wieBenIk();//LunaGlider goed
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
        console.log(this.name)
    }
}

let app = new App();
app.runApplication();
