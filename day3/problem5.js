function objectToArrayObject(object){
    let arrayOfObjects=[];
    for(let key in object){
        arrayOfObjects.push({name: key, value: object[key]});
    }
    console.log("Mang cac object: ");
    return arrayOfObjects;
}