

function sayMyName(){
console.log("V");
console.log("I");
console.log("K");
console.log("A");
console.log("S");
console.log("H");
}
sayMyName  // this is function reference
sayMyName()// this is function execution

// function addTwoNo(no1,no2){ // no1,no3 is parameter
//     console.log("sum of two no is",no1+no2);
// }
// addTwoNo(5,"3") // here 5,3 is argument

function addTwoNo(no1,no2){
    return no1+no2;  //here function well terminate
}

const resutl = addTwoNo(3,5);
// console.log(resutl);

function loginUser(username = "ram"){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in `
}
// console.log(loginUser("vikash"));
console.log(loginUser("vikash"));


