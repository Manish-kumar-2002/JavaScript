mySym = Symbol("My Name")   // object literals 
const jsUser = {
    id : 123,
    name : "Ram",
    age : 25,
    location : "Noida",
    [mySym] : "My ID",
    email : "ram@chatgpt.com",
    "Company name" : "chatgpt",
}

console.log(jsUser.email) 
console.log(jsUser["Company name"])  // this is use by sequence Notation

jsUser.email = "ram@ey.com"
console.log(jsUser.email)
jsUser["Company name"] = "EY"
console.log(jsUser["Company name"])

jsUser.sayHello = function() {
    console.log("Hi")
}

jsUser.sayName = function() {
    console.log(`My Name is ${this.name}`)
}

// Object.freeze(jsUser)
jsUser.name = "Ram Kumar"


// console.log(jsUser.name);


console.log(jsUser)

// console.log(jsUser.sayHello())

// console.log(jsUser.sayName())



// singleton object use by a coustructer method

const jsUserTwo = new Object()
jsUserTwo.id = 123
jsUserTwo.name = "Shyam"
jsUserTwo.email = "shyam@gmail.com"
console.log(jsUserTwo)

jsUser.FullAddress = {
    houseNo : 434,
    city: "jaipur",
    citizen : {
        citizenBy : "indian"
    }
}


console.log(jsUser.FullAddress.houseNo);
console.log(jsUser.FullAddress.citizen.citizenBy);




const obj1 = {
    a : "1",
    b : "2",
    c : "3"
}


const obj2 = {
    d : "4",
    e : "5",
    f : "6"
}



const obj3 = {obj1,obj2}
const obj4 = {...obj1,...obj2}
const obj5 = Object.assign({},obj1,obj2) // Object.assign(target,source) source ek se jada ho skte hai or abhi source add ho kr target me add ho jate hai (now return new object or target object same hai .....)

console.log(obj3);
console.log(obj4);
console.log(obj5);




const newUser = [
    {
        id : 1,
        name : "aman"
    },
    {
        id : 2,
        name : "naman"
    },
    {
        id : 3,
        name : "raman"
    },
    {
        id : 4,
        name : "caman"
    },
    {
        id : 5,
        name : "daman"
    },
]


console.log(newUser[1].id);


console.log(Object.keys(newUser));       // doubt 

console.log(Object.values(newUser));      // doubt 

console.log(Object.entries(newUser));


console.log(newUser.hasOwnProperty('0'));   // doubt 

console.log(newUser.hasOwnProperty('email'));  



const {a : first} = obj1
console.log(first);  