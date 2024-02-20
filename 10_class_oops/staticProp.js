class User{
    constructor(user){
        this.user = user;
    }

    logMe(){
        console.log(`user:${this.user}`);
    }

    static createId(){
        return `123`
    }
}

const user = new User("vikash")
console.log(user.createId());
user.logMe()

class Teacher extends User{
    constructor(user,email){
        super(user)
        this.email = email
    }
}

const a = new Teacher('iphone','i@gmai.com')
// console.log(a.logMe());
console.log(a.createId());
a.logMe()