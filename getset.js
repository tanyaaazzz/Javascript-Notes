class Person {
  constructor(name) {
    this._name = name;   // underscore means private convention
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const p1 = new Person("Tanu");

console.log(p1.name);   // getter called
p1.name = "Tanya";      // setter called
console.log(p1.name);
