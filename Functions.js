//Functions are nothing but a block of code you can use multiple times.
function add(num1,num2){
    console.log(num1+num2)
}
add(3,5);
//anything written post return will not be displayed no mattter what

function sum(a,b){
    let result=a+b;
    return result;

}
const result=sum(6,8)
console.log(result)
//Using loops
function user(name="Abhay"){
    if(user==undefined){
        console.log("Please Enter a name");
        return name
    }
    return `${name} just logged in`

}
//console.log(user("Tanya"))
console.log(user())    //incase of undefined Abhay will always be there.

//Multiple arguments passed with limited parameters
function values(val1,val2,...val3){
    return val3
}
console.log(values(200,300,400,500,600))

//Functions with Objects
//1. Pre-defined Objects
let myobj={
    myname:"Shanaya",
    city:"Bangaluru"
}
function f1(anyobject){
    console.log(`Hello my name is ${anyobject.myname} and I belong to ${anyobject.city}.`);
}
f1(myobj)
//2. Within functions
function f2(anyobject2){
    console.log(`Hello I am a ${anyobject2.animal}`)
}

let anyobject2={
    animal:"Panda"
}
f2(anyobject2)

//Functions with arrays
//1. Pre-Defined Array
let array=[23,45,67,89]
function myarray(arr){
    return arr[1]
}
console.log(myarray(array))
//2. With Function
function fruit(myfruit){
   return myfruit[1]
}
console.log(fruit(["mango","guava"]))


