class User{
    constructor(user){
        this.user = user;
    }
    logMe(){
        console.log(`username is ${this.user}`);
    }
}

class Teacher extends User{
    constructor(user,email,pass){
        super(user)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`a new course was added by ${this.user}`);
    }
}

const chai = new Teacher();
chai.addCourse()
const tea = new User('masalaChai');
// tea.addCourse();
tea.logMe();
chai.logMe();
console.log(chai instanceof User);