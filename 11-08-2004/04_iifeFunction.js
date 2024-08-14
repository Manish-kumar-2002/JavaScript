
 // IIFE Function ( Immediately Invoked Function Expression )



//  Named iife

(function namedIIFE(num1, num2){
    console.log(num1 + num2);
})(2,2);


// iife Function

((num1, num2) => {
    console.log(num1 + num2)
})(2,3);


// use with out return --> () this is normal funtion use

((num1, num2) => (console.log(num1 + num2)))(3,3);


