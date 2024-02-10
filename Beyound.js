const arr = []
// %DebugPrint(arr);

//++++++++type of array++++++++++

// continious , Holey

//SMI (small integer)
//Packed element
//Double (fload,string,funtion)

const arrTwo = [1,2,3,4,5]
// Packed_SMI_ELEMENT

arrTwo.push(6.0)
//Packed_double_elements

arrTwo.push('7')
//packed_elements

arrTwo[10] = 11
//Holey_elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check

//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)


//holes are very expensive in js

const arrThree = [1,2,3,4,5];
console.log(arrThree[10]);

//smi>double>packed        <-packed
//H_smi>H_bouble>H_packed   <-holey


const arrFour = new Array(3)
//just 3 holes . Holey_smi_elements

arrFour[0] = '1' // holey_elements
arrFour[1] = '2' // holey_elements
arrFour[2] = '3' // holey_elements

const arrFive = []
arrFive.push('1') // packed_elements
arrFive.push('2') // packed_elements
arrFive.push('3') // packed_elements

const arrSix = [1,2,3,4,5]

arrSix.push(NaN) // now its became packed_double
arrSix.push(Infinity) //now its became packed_double

// optimization recommendation use these method  -> for,for-of,forEach