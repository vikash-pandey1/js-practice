function SetUsername(user){
    //complex db calls
    this.user = user;
    console.log('called');
}


function createUser(user,email,pass){
    SetUsername.call(this,user)
    this.email =email;
    this.pass = pass;
}

const chai = new createUser("chia",'chia@gmai.com',123);
console.log(chai);