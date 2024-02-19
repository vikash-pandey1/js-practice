const user = {
    username:'vika',
    login:true,
    pass:123,
    getUserDetails:function(){
        console.log('got user details from db');
        console.log(this);
    },
}

console.log(user.login);
// user.getUserDetails();

// constructor

// const promiseOne = new Promise()
// const data = new Date()


function User(username,email,passs){
    this.username= username
    this.email = email;
    this.pass = passs
    
    return this
}

const userOne = new User('vik','vik@email.com',123)
const userTwo = new User('vikash','vikash@email.com',24444444444)
console.log(userOne);
console.log(userTwo);

// when we use new keyword a new object created
// then constructor function call
// 