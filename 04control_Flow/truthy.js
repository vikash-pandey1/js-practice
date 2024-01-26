const userEmail = [];
if(userEmail){
    console.log('got user email');
}else{
    console.log("don't have user email");
}

// falsy values 

/* false, 0 , -0 , bigint 0n
"", null, undefined ,NaN */

// truthy value

/*
"0", 'false'," ",[],{}, function(){} */

// if(userEmail.length === 0){
//     console.log('arrar is empty');
// }

const emptyObj = {};
if(Object.keys(emptyObj).length ===0){
    console.log('obje is empty');
}

// false == 0   -> true

// false == ''  -> true

// 0 == ''  -> =true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 =  null ?? 10 ?? 13

// console.log(val1);

// ternary operator

// condition? true:false;
const iceTeaPrice = 100
iceTeaPrice <=80?console.log("less than 80"):console.log('more than 80');



