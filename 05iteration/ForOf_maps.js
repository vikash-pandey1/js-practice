// +++++++++for of+++++++ // mostly used for array,obj

// ["","",""]
//[{},{},{}]

const arr = [1,3,53,45,33]
for(let i of arr){
    // console.log(i);
}

let name1 = 'vikash pandey'
for(let i of name1){
    if(i==' '){
        continue;
    }
    // console.log(i);
}

// +++++++++++maps+++++++++++

const map = new Map(); // map gives us a unique value
map.set('name','vikash')
map.set('name2','bk')
map.set('name3','vikash pandey')

// console.log(map);

for(const [key,value] of map){
    // console.log(key,':-',value);
}

const obj = {  // obj con't iterate with for of
    name:'rahul',  // obj in not iterable
    age:27,
}

// for(const [key,value] of obj){
//     console.log(key,value);
// }
