class User{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }

    get email(){
        return this._email
    }
    set email(email){
        this._email = email;
    }


    get pass(){
        return `${this._pass}hitesh`
    }
    set pass(value){
        this._pass = value;
    }

}

const vikash = new User('vikash@gmail.com','vikash@123')
console.log(vikash.pass);
console.log(vikash.email);