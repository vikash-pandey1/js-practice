// const myPromise = ()=> Promise.resolve('i have resolved');

// function firstFunction(){
//     myPromise().then(res=> console.log(res));
//     console.log('second');
// }
// async function secondFunction(){
//     console.log(await myPromise());
//     console.log('second');
// }

// firstFunction();
// secondFunction();

// const promise1 = Promise.resolve('first');
// const promise2 = Promise.resolve('second');
// const promise3 = Promise.reject('third');
// const promise4 = Promise.resolve('fourth');

// const runPromise = async ()=>{
//     const res1 = await Promise.all([promise1,promise2])
//     const res2 = await Promise.all([promise3,promise4])
//     return [res1,res2]
// }

// runPromise().then(res=>console.log(res)).catch(err=>console.log(err));


// start node js

// asios----------> js

import axios from 'axios'
