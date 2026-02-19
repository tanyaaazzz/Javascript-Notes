function outer() {
  var name = "Mozilla"; // name is a local variable created by outer
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName();
}
const my=outer();
outer()