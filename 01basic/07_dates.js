// Dates 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());

let date = new Date(2023,0,23);
console.log(date.toDateString());

let date1 = new Date("2023-01,14")
console.log(date1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
newDate.toLocaleString('default',{
    weekday:"long",
})

