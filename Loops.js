//For loop
//prints from 1to 9
for(let i=0;i<10;i++){
    let element=i;
    console.log(i)
}
console.log("_______________________________________________________")
//Break-terminates loops after the condition is met
//Continue- Skips for that part of iteration.
for(let j=0;j<=10;j++){
    if(j==5){
        console.log("Detected");
        break
    }
    console.log(j)
}
//Using an array
let myarr=["name", "place","animal"];
for(let k=0;k<myarr.length;k++){
    console.log(myarr[k])
}
//While loop- condition is first checked, then code is executed
let num=0;
while(num<10){
    console.log(num);
    num++;
}
//Using array
let arr1=["a","b","c"];
t=0;                                 //1
while(t<arr1.length){                //2
    console.log(arr1[t])             //3              
    t++;                             //4
}
//Do-while Loop-code is executed atleast once
z=0;                                   //1
do{
    console.log(z);                    //2
    z++;                               //3

}while(z<10);                          //4
console.log("____________________________________________")
//High Order array Loops - used to iterate through array, list, object
//FOR OF 
let arr2=[1,2,3,4,5,6]
for (const n of arr2) {
    console.log(n)
}
let myname=("riya","tiya","siya")
for (const l of myname){
    console.log(l);
}
//for of loops doesnt work out for objects
//Maps-In the case of for of loops maps are iterable but object aren't.
let mymap=new Map();
mymap.set('Trisha',19)
mymap.set('Vishal',15)
mymap.set('Kartik',13)
mymap.set('Kushal',17)
mymap.set('Hiya',18)
console.log(mymap);
for (const [key,values] of mymap) {
    console.log(key,values)
    
}



//FOR In loop
const myobj={
    username:"Tanu",
    age:28

}
for (const h in myobj) {
    console.log(myobj[h])
}

/*
NOTEEEEEEE
FOR-OF is iterable for maps but not objects.
FOR-In is iterav\ble for objects but not maps.
*/

//FOR-IN Loops - works only on arrays
/*
array.forEach(function(element, index, array) {
  // code to run
});
*/
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index)  {
  console.log(fruit);
});

//Callback function: A callback function in JavaScript is simply a function that is passed as an argument to another function and is executed later, usually after some work is done.
//These FILTER, MAP, REDUCE ARE ALL ARRAY METHODS

//FILTER- used to filter out an array based on certain conditions
let mya1=[1,2,3,4,5,6,7,8]
let even=mya1.filter(function(element){
    return element%2==0;
});
console.log(even);

//MAPS - used to create new array using call back function which means using array that is previously defined.
let mya2=[1,2,3,4,5,6,7,8]
let mult=mya2.map(function(myelement){
    return myelement*2
})
console.log(mult)

//REDUCE- to reduce element of an array to single element
let mya3=[1,2,3,4,5,6,7,8,9]
let red=mya3.reduce(function(a,b){
    return a+b

});
console.log(red);

