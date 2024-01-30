// for loop

for(let i =0;i<=10;i++){
    if(i==5){
        // console.log(`${i} is best no`);
    }
    // console.log(i);
}

for(let i =0;i<=20;i++){
    // console.log(`outer loop ${i}`);
    for(let j = 0;j<=10;j++){
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(i+'*' + j + ' = '+i*j);
    }
}

let arr = ["flash",'batman','superman'];

for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}


// break and continue

// for(let i=1;i<21;i++){
//     // console.log(i);
//     if(i==10){
//         console.log(`${i} is detected`);
//         break;
//     }
//     console.log(i);
// }


for(let i=1;i<21;i++){
    // console.log(i);
    if(i==10){
        console.log(` 10 is detected`);
        continue;
    }
    console.log(i);
}








