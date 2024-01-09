// primitive 

// 7 types : String,Number,Boolean,null,undefined,
//Symbol,BigInt

// string
const name = "vikash";
//number
const score = 100;
const scoreValue = 100.3;
//boolean
const isLoggedIn = false;
//null
const outsideTemp = null;
//undefined
let userEmail;
// symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
// bitInt
const bigNumber = 4353344343434n;
console.log(bigNumber);

// reference types (non primitive )

// Array,Object,Functions


// array
const heros = ['shaktiman','naagraj','doga']
// object
let data = {
    name:'viksh',
    age:22,
    pass:324
}
//function
const myFunction = function(){
    console.log('this is function');
}
console.log(typeof myFunction);
