//last index of P
// let str="Prasad Patil";

// console.log(str.lastIndexOf("P"));

//index of


//slice

// let str1="HI may me ata birthday";
// console.log(str1.slice(2,17));

// replace 

// let str2="sangu paije ";
// console.log(str2.replace("paije",""));

//split
// let str="Prasad   Patil is my nme ";
// let char="Patil";
// console.log(str.split(" "));




//integer 

//parseInt
// console.log(parseInt("6aaababaab"));
// console.log(parseInt("6.255555"));


//parseFloat
// console.log(parseFloat("6.2333333"));
// console.log(parseFloat("dfhth8ihougog"));

//arrays 

//let arr=[1,2,3,4];
//push 
// let arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);

//pop

// arr.pop();
// console.log(arr);

//shift(pop from beginning)

// arr.shift();
// console.log(arr.shift());

//push into beginning unshift 

// let m=arr.unshift(5);
// console.log(arr);

//concat

// let arr1=[1,2,3,4];
// let arr2=[5,6,7];

// let finalarr=arr1.concat(arr2);


//for each 
// let arr=[1,2,3,4];
// let arr2=[];
// function add1(str){
//     arr2.push(str+1);
// }

// arr.forEach(add1);
// console.log(arr2);

//time 

// const currentdate =new Date();

// console.log(currentdate.getTime());
// //gives ms since 1970



// const currentdate =new Date();

// console.log(currentdate.getMonth());

//JSON 

//stringify (converts object to string)
// let user={
//     firstname:"prasad",
//     id:"2303127"
// }

// const string =JSON.stringify(user);

// console.log(string);

//converts string to object

let user='{"firstname":"prasad","id":"2303127"}';
let user1=JSON.parse(user)
console.log(user1.id);
