

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("")
// }

const arr = ["mainsh" , "vishal", "sandeep", "purvansh", "saurabh"];


for (const count of arr) {
    console.log(count);
}


for (const key in arr) {
    console.log(key);
}


arr.forEach((item ,index ,arr) => {
    console.log(index);
});



// const userDetails = {
//     id : "123",
//     name : "manish",
//     houseNo : 434,
//     city: "jaipur",
//     citizen : {
//         citizenBy : "indian"
//     }
// }   

// for (const key in userDetails) {
//             console.log(`${key} : ${userDetails[key]}`);
// }




const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);


console.log(map1)


for (const element of map1) {
    console.log(element)
}