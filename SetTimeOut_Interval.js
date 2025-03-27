// setTimeout(()=>{
//     console.log("run after 2 sec")
// },1000)

const timerId = setInterval(() => {
    console.log('run interval after 1 sec')
},1000);

setTimeout(()=>{
    clearInterval(timerId);
},4000) 