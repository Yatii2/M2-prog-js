function heeftEenResultaat()
{
    let resultaat=1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y = (a*(x*x))+(b*x)+c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x))+(b*x)+c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function logY(u,h,l)
{

    let logY = Math.log(l) + h + Math.pow(u,2);
    return(logY);
}

let y4 = logY(9,8,15);
console.log(y4);


class App
{
    runApplication()
    {
        console.log("hello world!");
    }
    marioFunction()
    {
        console.log("MARIO!!");
    }
    laughFunction()
    {
        return "BWAHAHA!!!";
    }
    optellen(getal1, number1)
    {
        return getal1 + number1;
    }
    min(getal2, number2)
    {
        return getal2 - number2;
    }
}

let app = new App();
app.runApplication();
app.marioFunction();
let ha = app.laughFunction();
let plus = app.optellen(6, 5);
let minus = app.min(5,6);
console.log(ha);
console.log(plus);
console.log(minus);


