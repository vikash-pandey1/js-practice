//++++++++++++ object+++++++++++++

const obj = {       // for in use for iterate obj,arr
    name:'vikash',
    age:22,
    skill:'java'
}

for(const key in obj){
    // console.log(`${key} value is: ${obj[key]}`);
}

const arr = ['vi','js','cpp','py']
for(const key in arr){
    // console.log(arr[key]);
}

const map = new Map();  // can't iteratre over map usign for in 
map.set('name','vikash')// iterate using for of
map.set('name2','bk')
map.set('name3','vikash pandey')

for(const key of map){
    console.log(key);
}

