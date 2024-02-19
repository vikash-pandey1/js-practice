let name = 'vikash   ';
console.log(name.length);

let myHeros = ['ram', 'shyam', 'rash']

let hero = {
    ram: 'god',
    shyam: 'ram ram',
    rash: 'rash ram ram',

    getRamPower: function () {
        console.log(`ram powr is ${this.ram}  `);
    }
}

Object.prototype.vikash = function(){
    console.log('vikash is present in all object');
}

Array.prototype.hitesh = function(){
    console.log('hitesh say hello');
}
// hero.vikash();
myHeros.vikash();
// myHeros.hitesh();  array hav hitesh
// hero.hitesh();  // object don't have hitesh



const user = {
    name:'vikash',
    email:'vikash@gmail.com'
}
const teacher = {
    makeVideo:true
}
const teachingSupport = {
    isAvailable:false
}

const taSupport = {
    makeAssignment:'js assing',
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = 'vikashaurcode       '

console.log('actual length is',anotherUsername.length);
String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength()
'vikash'.trueLength()

