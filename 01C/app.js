class App
{

    runApplication()
    {
        this.greeting = "Starting up";
        console.log("hello world!");
        this.appNaam = "Hoi"
        this.versieNummer = "1.0"
        this.versieDatum = "20/11/23"
        this.autheur = "Yati"
        this.copyright = "Yati"
        this.distributeur = "Yati"
        this.darkmode = true
        let boolean = false
        let number = 2
        let string = "hoi"
        this.boolean2 = false
        this.number2 = 3
        this.string = "doei"
        console.log(boolean);
        console.log(number);
        console.log(string);

    }
}

let app = new App();
app.runApplication();

console.log(app.greeting)
console.log("appnaam: "+app.appNaam);
console.log("versienummer: "+app.versieNummer);
console.log("date: "+app.versieDatum);
console.log("autheur: "+app.autheur);
console.log("copyright: "+app.copyright);
console.log("distrubiteur: "+app.distributeur);
console.log("darkmode: " + app.darkmode);
console.log(app.boolean2);
console.log(app.number2);
console.log(app.string2);