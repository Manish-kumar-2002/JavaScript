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
