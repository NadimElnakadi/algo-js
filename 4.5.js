let x1= prompt("enter x1");
let y1= prompt("enter y1");
let x2= prompt("enter x2");
let y2= prompt("enter y2");


function calcDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1; 
    return Math.sqrt(x*x + y*y);
}
console.log(calcDistance(x1,y1,x2,y2))

