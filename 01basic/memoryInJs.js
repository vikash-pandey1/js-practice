// Stack (Primitive) -> stack gives us copy of the items
let myYoutubename = 'hiteshchaudhary'
let anothername = myYoutubename;

anothername = 'ramshyam'
console.log(myYoutubename);
console.log(anothername);

// Heap (Non-Primitive) -> heap gives us reference of the items

let userOne = {
    email:'ram@gmail.com',
    pass:132
}
let userTwo = userOne;
console.log(userOne.email);
userTwo.email = 'shyam@gmail.com';
console.log(userTwo.email);
console.log(userOne.email);