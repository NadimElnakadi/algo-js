var deepArray = [["1, 1, 3, 4"]];
var shallowCopy = deepArray.slice(0);


shallowCopy[0].push("Je rajoute des trucs");
console.log (deepArray[0],shallowCopy[0]);
