// +++++++++++if  
const isUserloggedIn = true;

if(isUserloggedIn){
    // console.log("user is logged in ");
}
if(false){

}
// +++++++++++++ operator+++++++++
/*
<,  >, <= , >= == != === 
*/ 

if(2 == "2"){
    console.log('executed');
}else{
    console.log('not executed');
}

const temp = 54;
if(temp==50){
    console.log('yes equal to 50');
}else{
    console.log('not equal to 50');
}

const score = 200
if(score>100){
    let power = 'fly'
    console.log(`'user power ${power}`);
}
// console.log(`user power ${power}`);

const balance = 1000
// if(balance>500) console.log("test");

// if(balance<500){
//     console.log('less than 500');
// }else if(balance <750){
//     console.log('less than 750');
// }else if(balance <900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1100');
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log('allow to buy ');
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log('user logged in ');
}






