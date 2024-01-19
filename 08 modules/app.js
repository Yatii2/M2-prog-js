import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"

class App
{
    runApplication()
    {
        console.log("hello world!");
    }
 } 
   
let dino = new Dino ("modulosaurus");
console.log(dino.naam);
let plant = new Plant ("modulobloem");
console.log(plant.naam)

let app = new App();
app.runApplication();