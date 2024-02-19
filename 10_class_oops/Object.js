function multi(n){
    return n*5;
}
multi.power = 2;
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function createUser(user,score){
    this.user = user;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log('price is: ',this.score);
}

const chai = new createUser("chai",24);
const tea = new createUser('tea',234)

chai.printMe();
chai.increment();
chai.printMe();



/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly crated object gets linked to the prototype
property of the constructor function. This means theat it has access to proeprties and method
defined on the constructor's prototype.

The constructor is called: The constructor function is called
with the specified arguments and this is bound to the newly
created object., to be the intended return value. 

The new object is returned: After the constructor function
has been called , if it doesn't return a noo-promitive value(object,array,function,etc..) 
the newly created object is returned.
*/