
declaring variable let,var,const
let a=9;
a=2;
a=8;
console.log(a);

let firstname="prasad";
let age=20;
let ismarried=false;
//console.log("Ya thingnyache naav "+firstname+" ani toh "+age+" varshacha aahe");

//if else
// if(ismarried==true){
//     console.log(firstname+" is married");
// }
// else{
//     console.log(firstname+" is not married(sadly)");
// }

//looping 
// let sum=0;

// for(let i=0;i<=100;i++){
//     sum =sum+i;
// }

//console.log(sum);

//arrays 
const ages=[20,21,22,23,25,26];

for(let i=0;i<ages.length;i++){
    if(ages[i]%2!=0){
        console.log(ages[i]);
    }
 }

let largest=0;
for(let i=0;i<ages.length;i++){
    if(ages[i]>largest){
        largest=ages[i];
    }
}

console.log(largest);
complexobjects
const peopledata=[
    {
        fname:"prasad",
        gender:"male"
    },
    {
        fname:"shreyasi",
        gender:"female"
    }
];
for(let i=0;i<peopledata.length;i++){
    if(peopledata[i]["gender"]=="female"){
        console.log(peopledata[i]["fname"]);
    }
}

//functions(only executes when called and it is stored until it is called)
function sum(a,b){
    return a+b;
}

console.log(sum(1,4));

//bounty 
let sum=0;

for(let i=0;i<100000000000;i++){
    sum+=i;
}
console.log(sum);

//callback functions 

function calculatearea(a,b,shape){
    displayres(shape(a,b));
}

function displayres(res){
    console.log("Area is "+res);
}

function rectangle (a,b){
    return a*b;
}

function triangle (a,b){
    return 0.5*a*b;
}
function calculatearea(a,b,shape){
    displayres(shape(a,b));
}
calculatearea(5,6,rectangle);
