// let a = 5;
// let b = 10;
// console.log("before swap:",a,"-----",b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log("after swap:",a,"--------",b);

function outer(){
    let outerVar = "ram"

    function inner(){
        console.log(outerVar);
    }
    return inner
}
outer();
