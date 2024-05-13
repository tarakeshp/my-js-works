// input array
let arr = [1, 2, 3, 4, 5];

// no of rotations 
let k =  2; 

// Rotate the elements of the array arr by K rotations.
// If k=2 then o/p of the array should be [4, 5, 1, 2, 3]

// anti-clockwise [ 3, 4, 5, 1, 2 ]
for(let i = 0; i < k; i ++) {  
  arr.push(arr.splice(0, 1)[0]);
}
console.log(arr);

// clockwise [ 4, 5, 1, 2, 3 ]
for(let i = 0; i < k; i ++) {  
  arr.unshift(arr.pop());
}
console.log(arr);
