
let a = 29 // global scope
if(true){
    let a = 10// block  scope
const b = 39
// console.log("inner",a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'vikash'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two();

}
// one();

if(true){
    const username = 'vikash'
    if(username === 'vikash'){
        const website = ' youtube'
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++ intresting ++++++++++++
console.log(addone(5));
function addone(value){
    return value+1
}

const addTwo = function(num){
    return num+2
}


console.log(addTwo(5));
