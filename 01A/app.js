class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = " appnaam: Hoi"
        let versieNummer = "versienummer: 1.0"
        let versieDatum = "date: 20/11/23"
        let autheur = "autheur: Yati"
        let copyright = "copyright: Yati"
        let distributeur = "distrubiteur: Yati"
        let darkmode = "darkmode: " + true
        console.log(appNaam);
        console.log(versieNummer);
        console.log(versieDatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();