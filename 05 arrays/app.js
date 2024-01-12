class App
{
    runApplication()
    {
        console.log("hello world")

        let headersByCssClass = document.getElementsByClassName("badName");
        for(let i = 0; i < headersByCssClass.length; i++){
            headersByCssClass[i].innerText ="hoi";
           
        }
       
        const data = [ "nieuws","reviews","commentaar","blablal","aksdjawj","wow"];

        for(let i = 0; i < data.length; i++){
            headersByCssClass[i].innerText = i + ": " + data[i];
        }
    }
    
}       

let app = new App();
app.runApplication();