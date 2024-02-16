const promiseOne = new Promise((res, rej) => {
    // Do an async task
    //DB calls,cryptography,network
    setTimeout(() => {
        console.log("Async task is complete");
        res()
    }, 1000)
})

promiseOne.then(() => {
    console.log("promise consumed");
})

new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task2");
        res()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res({ username: "vikash", email: "vikash@gmail.com" })
    }, 1000)
})

promise3.then((user) => {
    console.log(user);
})

const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            res({ username: 'pandey', pass: '123' })
        } else {
            rej('error :something wernt wrong')
        }
    }, 1000)
})

promise4
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('the promise is either res or rej');
    })

const promise5 = new Promise((res, rej) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            res({ username: 'js', pass: '123' })
        } else {
            rej('error :js went wrong')
        }
    }, 1000)
})

async function consumePromise5(){
    try {
        const res = await promise5
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data);
//         // console.log(res);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res,rej)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((err)=> console.log(err))