const User = {
    _email:'vikash@gmail.com',
    _pass:'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(v){
        this._email = v;
    }
}
const tea = Object.create(User);
console.log(tea.email);