//Scope Level- child can take from parent, but parent cant take from child.
function one(){
    let name="Tanu";
    let age=18;
    function two(){
        console.log(name);
        let channel="youtube"
    }
    //console.log(channel); Error
    two()
    
}
one()

//THIS keyword- works with objects, but not inside function.. It is used to talk about current context
//with function
function myone(username){
      console.log(`hello ${this.username}`) // will give undefined since inside a function
}
myone("Sia"); 

//with object
let myobj1={
    namee:"Kritika",
    age:19,
    greetings: function myobj2(){
        console.log(`hello ${this.namee}`)

    }
   

}
myobj1.greetings()
console.log(this) //{} as output since the current context is nothing, but in brower the current context is not empty for windows.
myobj1.namee="sanya";
myobj1.greetings()

//Arrow Function
function add(a,b){
    return a+b
}
console.log(add(4,6))
//The above function can be written as
// let fnname=(para)=>epression
let add2=(num1,num2)=>num1+num2
console.log(add2(3,89))
