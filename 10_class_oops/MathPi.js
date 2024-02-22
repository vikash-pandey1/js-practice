const obj = { user: 'vikash' }
// console.log(obj);

const des = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(des);

const myobj = {
    name: 'ginger',
    price: 249,
    isAvailable: true,
    orderChai:function(){
        console.log('chai nhi bani');
    }
}
console.log(Object.getOwnPropertyDescriptor(myobj, "name"));

Object.defineProperty(myobj,'name',{
    // writable:false,
    enumerable:true,
    // configurable:false
})
console.log(Object.getOwnPropertyDescriptor(myobj,'name'));

for (let [key, value] of Object.entries(myobj)) {
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
}


// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);