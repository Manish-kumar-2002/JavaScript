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





// this keyword



const userDemo = {
    id : 1,
    name : "ram",
    welcomeMessage : function (){
        console.log(`hi ${this.name} welcome`);
        console.log(this)
    }
}


userDemo.welcomeMessage()
userDemo.name = "manish"
userDemo.welcomeMessage()






function thisDemo() {
    const name = "manish"
    console.log(this.name);
}
thisDemo()

console.log(this);




// Arrow function


 const arrowDemo = (num1,num2) => {
    // console.log(this)
    return num1 + num2
}


const arrowDemo2 = (num1,num2) =>  (num1 + num2)

    console.log(arrowDemo(2,4))
    console.log(arrowDemo2(2,4))