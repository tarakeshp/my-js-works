/* double each number in array using generator */
function* double() {
  for(let v of this){
    yield v + v;
  }
}
Array.prototype.double = double;

let a = [2, 3, 5];
for(let v of a.double()) {
  console.log(v);
}
