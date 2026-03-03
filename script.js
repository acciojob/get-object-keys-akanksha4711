//your JS code here. If required.
let student = { name: "Aman" };

function getKeys() {
  return Object.keys(this);
}

console.log(getKeys(student))