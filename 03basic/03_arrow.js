const user = {
    usename :'vikash',
    price:999,

    welcomeMessage:function(){
        console.log(`${this.usename},welcome to website `);
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.usename = 'sam'
// user.welcomeMessage();
// console.log(this);

// function one(){
//     let user = 'vikash'
//     console.log(this.user); // this works in object,normal funct
// }
// one()

// const chai =function(){
//     let user = 'vikash'
//     console.log(this.user);
// }

const chai = ()=>{
    let user = 'vikash'
    console.log(this.user);
}


// chai();

// const addTwo = (num1,num2)=>{  //basic explicit return
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2 // adv  implicit return
// const addTwo = (num1,num2)=> (num1+num2)  //adv
const addTwo = (num1,num2)=> ({username:'vikash'}) 




console.log(addTwo(35,3));

const myArray = [2,5,53,3];
myArray.forEach(()=>{
    console.log(myArray);
})