class App
{
    runApplication()
    {

        this.greeting = "Starting up";
    }

    runApplication()
    {
        console.log("hello world!");
        let appNaam = "Hoi"
        let versieNummer = "1.0"
        let versieDatum = "20/11/23"
        let autheur = "Yati"
        let copyright = "Yati"
        let distributeur = "Yati"
        let darkmode = true

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
