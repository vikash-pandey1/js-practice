const name = "vikash"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('vikash-pandey-1');
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.endsWith);
console.log(gameName.charAt(0));
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('v'));
console.log( typeof gameName);
console.log();
const newstr = gameName.substring(0,4);
console.log(newstr);

const anotherstr = gameName.slice(0,-8);
console.log(anotherstr);

const newstr1 = "       vikash "
console.log(newstr1);
console.log(newstr1.trim());

const url = "http://vikash.com/vikash%20pandey";
console.log(url.replace('%20','-'));
console.log(url.includes('vikash'));
console.log(url.includes("sdlfj"));
console.log(gameName.split('-'));