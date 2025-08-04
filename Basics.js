// JAVASCRIPT- Makes the website interactive. ECMA is a standard on which Javascript is based, to ensure different document on Javascript are talking about same language.

/* 1.VARIABLES 
var is globally scoped, let and const are block scoped. */
let a=55;
var b=100;
{
    let a=66;
    var b=666;
}
console.log(a)
console.log(b)
// Constant once declared can't be changed.
const accID= 6789;
let accname="Tanya";
var accpsd="ABC";
accCity="Jaipur";
let accstate;
//accID=222; Error pop
accname="Tanu";
accpsd="XYZ";
console.table([accID,accname,accpsd,accCity,accstate])

//2. DATA TYPES- Primitives, Objects. NULL is an object.
//Data-type Conversion
let myname="Vikram";
let mynewname=Number(myname);
console.log(typeof mynewname);
console.log(mynewname);
//Joining Different dataypes
console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");
//Comparison of Datatypes
console.log(2>1);  //Same data types i.e integers being compared
console.log(2>=1);
console.log(null==0); //Different Data types being compared. 
console.log(null>0); 
console.log(null>=0);

//3.STACK(Primitive) AND HEAP(Non-Primitive) MEMORY
let firstchannelname="Hitesh";
let secchannelname=firstchannelname;
secchannelname="Chai n Code"; //Block Scoped "let" cant be redeclared so, no let word being used.
console.log(firstchannelname);
console.log(secchannelname)

let userone={
    usernm:"Ananya",
    upi:"123@oksbi"

}
let secusername=userone;
secusername.upi ="789@axis";
console.log(userone);
console.log(secusername);

//STRINGS
const name1="Harry";
console.log(`Hello World! My name is ${name1}. Nice to meet y'all! `)
const name2= new String("Tanu");
//PROPERTIES
console.log(name1.length);
console.log(name1.toUpperCase);
console.log(name1.toUpperCase);
console.log(name1.slice(2,4));
console.log(name1.slice(2));
let name3="Harry bhai";
let name4=name3.replace("bhai","bro");
console.log(name4);
let name5=name3.concat(name4);
console.log(name5);
console.log(name5[8]);

//NUMBER AND MATHS
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(7.8)); //takes next higher value
console.log(Math.floor(9.3));
console.log(Math.round(4.7));
console.log(Math.max(3,4,5,6,7));
console.log(Math.min(3,4,5,6,7));
console.log(Math.random());
console.log((Math.random()*10) +1); // generates between 1-9
console.log(Math.floor(Math.random()*10) );

//DATE AND TIME- Date is an object in JS
let mydate=new Date();
console.log(mydate.toDateString());
let mynewdate=new Date(2023,0,16);
console.log(mynewdate.getMonth());



















