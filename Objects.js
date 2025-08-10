//Objects are used to represent real world entities. They can be declared 2 ways-singleton and literals.
//Symbols are built-in objects and are gauranteed to be unique acrosss different objects. 
//Literals
const sym1=Symbol("key")
const Jsuser={
    name: "Kriti",
    email: "k123gmail.com", //name,email,fullname,age ko as a string treat kra h
    "fullname": "Sharma",
    age:16,
    username:{
        firstname:"Vaibhavi",
        lastname:"Varshney"
    },
    lastlogged:["mon","tue"],
    [sym1]:"merikeyy" //agar sirf sym1 likha hota toh as a string treat krte
}
//ways to access
console.log(Jsuser.name)
console.log(Jsuser["name"]); //better practice
console.log(Jsuser.username.lastname)
console.log(Jsuser[sym1]);
//Singleton
const adm={}
adm.name="Vishank";
adm.agee=56;
console.log(adm.agee)
//Joining Objects
const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};
const obj3={obj1,obj2}  //obj1 mai obj2 add ho jayega
console.log(obj3);
const obj4=Object.assign({},obj1,obj2)  //obj1, obj2 dono {} mai add ho jayenge
console.log(obj4)
//Best Practice by using Spread Operator
const obj5={...obj1,...obj2} //assign operator wala hi kaam karega, but we can use it with arrays too.
//Accessing
console.log(Object.keys(obj1));
console.log(Object.values(obj1));




