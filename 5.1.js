function askTvserie ()
{
    let arr = ["daenarys", "john", "aria"];
    nom_serie = prompt("Nom de la série");
    year_serie = prompt("Année de production");
    cast_serie = prompt("Noms des membres du cast")
    arr.push(cast_serie)

    while(cast_serie != "")
    {
        cast_serie = prompt("Noms des membres du cast");
        arr.push(cast_serie);
    }
     
    arr.pop()

    let myObject = {
        name : nom_serie ,
        year : year_serie ,
        cast : arr ,
    }
    return myObject
}
console.log(askTvserie())