//... ( rest opreater or spread opreater ) depend on use case


function getSomeValue(...num){
    return num
}

console.log(getSomeValue(4,3,2,1));



const user = {
    id : 1,
    name : "ram"
}



function getObjectValue(anyObject){
    console.log(`this user ID: ${anyObject.id} and Name: ${anyObject.name}`);
}

getObjectValue(user);



const myNewArray = [100,200,300];

function getArrayElement(arrayValue){
    return arrayValue[1];
}
console.log(getArrayElement(myNewArray));
;