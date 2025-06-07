//q1
// let i=10;
// function print(){
//     console.log(i--);
//     if(i<0){
//         clearInterval(intervalid);
//         console.log("Happy new year!!");
//     }
// }

// let intervalid=setInterval(print,1*1000);//setinterval returns a interval id after  called interval

//q2(find out the actualtime after which settimeout executes the function)
// function print(){
//     const now=new Date();
//     const hours=now.getHours();
//     const minutes=now.getMinutes();
//     const seconds=now.getSeconds();
//     console.log(hours+":"+minutes+":"+seconds);
// }
//     const now =new Date();
//     const hours=now.getHours();
//     const minutes=now.getMinutes();
//     const seconds=now.getSeconds();
//     console.log(hours+":"+minutes+":"+seconds);
//     setTimeout(print,3*1000);

//q3(create terminal clock while executing program)

// let i=10;
// function printDate(){
//     const now =new Date();
//     const hours=now.getUTCHours();
//     const minutes=now.getUTCMinutes();
//     const seconds=now.getUTCSeconds();
//     console.log(hours+":"+minutes+":"+seconds);
//     if((i--)<0){
//         clearInterval(intervalid);
//     }
// }

// let intervalid=setInterval(printDate,1000);

const now=new Date();
const hours=now.getUTCHours();
const minutes=now.getUTCMinutes();
const seconds=now.getUTCSeconds();
console.log("UTC");
console.log(hours+":"+minutes+":"+seconds);
const nowindia=new Date();
const indiahours=now.getHours();
const indiaminutes=now.getMinutes();
const indiaseconds=now.getSeconds();
console.log("INDIA");
console.log(indiahours+":"+indiaminutes+":"+indiaseconds);

