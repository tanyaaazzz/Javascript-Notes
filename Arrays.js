//ARRAYS
myarray=[1,23,45,67];
console.log(myarray[0]); //gives the element on the 0th index
console.log(myarray.push(9)); //adds element to the last
//console.log(myarray.pop()); //removes the last element
console.log(myarray);
console.log(myarray.shift()); //removes first element of array
console.log(myarray);
console.log(myarray.unshift(909)); //adds element at the beginning
console.log(myarray);
console.log(myarray.includes(8));
console.log(myarray.join()) //converts array to string
//SLICE is used to extract a portion of an array w/o hampering the original array and is exclusive of last element mentioned.
//SPLICE is used to extract portion of an array, hampering the original array and is inclusive of the last element.
let array=[23,34,56,78,90];
let array1=array.slice(1,3);
console.log(array);
console.log(array1);
let array2=array.splice(1,4);
console.log(array1);
console.log(array);
//Concat is used to join array, when we use push then it [  ,[added stuff]] but concat joins the arrays.
let myarray1=[23,45,67,89,76];
let myarray2=[98,65,"TAN"];
let myarray3=myarray1.concat(array2);
console.log(myarray3);
//Miscellaneous
let score1=456;
let score2=667;
console.log(Array.of(score1,score2));
let score3=[23,56,78,90,[32,[6767,9898]]];
let score4=score3.flat(Infinity);
console.log(score4)




