let min = prompt ("Enter min number");
let max = prompt ("Enter max number");
if (min > max) {
    console.log("You did'nt understand quit please");


} else if (min <max){
    let current = prompt("Enter current number");
    if ((min < current) &&  (current< max)){
    console.log(current);
}
}