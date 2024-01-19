import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"
import {MaakDino, MaakPlant} from "./fabriek.mjs"

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
let maakdino = MaakDino();
let maakplant = MaakPlant();
console.log(maakdino.naam);
console.log(maakplant.naam);


let app = new App();
app.runApplication();