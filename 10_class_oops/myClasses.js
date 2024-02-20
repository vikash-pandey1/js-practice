// ES6

// class User{
//     constructor(user,email,pass){
//         this.user  =user;
//         this.email = email;
//         this.pass = pass;
//     }

//     encryptPassword(){
//         return `${this.pass}abc`
//     }
//     changeUser(){
//         return `${this.user.toUpperCase()}`
//     }
// }

// const chai = new User('chai','chai@gmail.com',1234);
// console.log(chai.encryptPassword());
// console.log(chai.changeUser());



// behind the scene

function User(user,email,pass){
    this.user = user;
    this.email = email;
    this.pass = pass;
}

User.prototype.encryptPassword = function (){
    return `${this.pass}abc`
}
User.prototype.changeUser = function(){
    return `${this.user.toUpperCase()}`
}

const tea = new User('tea','tea@gmail.com',123)
console.log(tea.encryptPassword());
console.log(tea.changeUser());