// const coding = ['js','java','py','cpp']

// const values = coding.forEach((val)=>{  // for each did't return any value
//     // console.log(val);
//     return val
// })
// console.log(values);

// const no = [1,2,3,4,5,6,7,8,9,10]
// const re = no.filter((num)=>{
//     return num>3
// })
// const n = no.filter((num)=> num!=5)
// console.log(re);
// console.log(n);

// const newNums =[]
// no.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// ++++++++++++++++++map+++++++++++

// const no = [1,2,3,4,5,6,7,8,9,10]

// const newNums=no.map((num)=> num+10)
// console.log(newNums);

// same as above using for each

// let arr = []
// no.forEach((num)=>{
//     arr.push(num+10);
// })
// console.log(arr);

// chaining 

// const newNums = no
// .map((num)=> num*10)
// .map((num)=> num+1)
// .filter((num)=> num>50)
// console.log(newNums);

// ++++++++++++++++reduce++++++++++

const num = [1,2,3,4]
// const total = num.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc +currval
// },3)

// const total = num.reduce((acc,curr)=> acc+curr ,5)
// console.log(total);

const shoppingCard = [
    {
        itemName: 'js course',
        price:999
    },
    {
        itemName:'py courses',
        price:399
    },
    {
        itemName:'c course',
        price:388
    }
]

const total = shoppingCard.reduce((acc,item)=>acc+item.price,0)
console.log(total);





