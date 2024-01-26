// immediately invoked function expresson (IIFE)

(function chai(name){
    // named iife
    console.log(`db connected in js ${name}`);
})('vikash');

(()=>{
    console.log('db connected');
})()
// some times problem is created by global variable so 
//to get rid from global scope we use 
// to remove the global scope polution(variable) we use iife

