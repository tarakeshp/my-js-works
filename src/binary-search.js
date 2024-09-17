const arr = [1, 3, 5, 7, 11, 17, 21, 23, 43, 71, 92];
const searchEle = 23;

const result = binarySearch(arr, searchEle);
if(result === -1) {
  console.log("element not found");
} else {
  console.log("element found at index: %d", result);
}

function binarySearch(sortedArr, searchEle) {
    
    let low = sortedArr[0];
    let high = sortedArr.length - 1;
    let interation = 0;
  
    while(low <= high) {      
    
        let mid = Math.floor((low + high) / 2);
        interation++;
        console.log("\nlow: %d, high: %d, mid: %d, interation: %s", low, high, mid, interation);

        if(sortedArr[mid] === searchEle) {
          return mid;
        }

        if(searchEle > sortedArr[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
    }
    
    return -1;
}


// output:
// low: 1, high: 10, mid: 5, interation: 1' '
// low: 6, high: 10, mid: 8, interation: 2' '
// low: 6, high: 7, mid: 6, interation: 3' '
// low: 7, high: 7, mid: 7, interation: 4'
// 'element found at index: 7'
