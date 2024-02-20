let a = 5;
let b = 10;
console.log("before swap:",a,"-----",b);
a = a+b;
b = a-b;
a = a-b;
console.log("after swap:",a,"--------",b);