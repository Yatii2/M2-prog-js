class App
{
    runApplication()
    {
        console.log("hello world!");
        const favartiest = ['artiest1','artiest2','artiest3'];
        for( let i = 0; i < favartiest.length; i++){
            const element = favartiest[i];
            const artiestrang = (i + 1) + ": " + element;
            
            console.log(artiestrang);
        }
        favartiest.push("bob dylan","prince")
        for( let i = 0; i < favartiest.length; i++){
            const element = favartiest[i];
            const artiestrang = (i + 1) + ": " + element;
            
            console.log(artiestrang);
        }
        favartiest.splice(3,4)
        for( let i = 0; i < favartiest.length; i++){
            const element = favartiest[i];
            const artiestrang = (i + 1) + ": " + element;
            
            console.log(artiestrang);
        }
        favartiest.push("artiest4","artiest5")
        for( let i = 0; i < favartiest.length; i++){
            const element = favartiest[i];
            const artiestrang = (i + 1) + ": " + element;
            
            console.log(artiestrang);
        }
    
    
        const nummers = [2,5,7]
        console.log(nummers)
        for( let i = 0; i < nummers.length; i++){
            const element = nummers[i] +=1;
            console.log(element);
        }
    }
}

let app = new App();
app.runApplication();