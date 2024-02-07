// ++++++++++++++++++++++for each+++++++++++
const coding = ['js','java','py','cpp']


coding.forEach(function (val){ // for each with normal func
    // console.log(val);
})

coding.forEach((item)=>{ // for each with call back
    // console.log(item);
})
function printMe(item){ // another way to print
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item,idex,arr)=>{ // can have multiple parameter to print
    // console.log(item,idex,arr);
})

const myCoding = [
    {
        lanName:'javaScript',
        lanFile:'js'
    },
    {
        lanName:'java',
        lanFile:'java'
    },
    {
        lanName:'python',
        lanFile:'py'
    },
    {
        lanName:'c++',
        lanFile:'cpp'
    }
]

myCoding.forEach((item)=>{
    console.log(item.lanName);
    console.log(item.lanFile);
})

