/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
*/


function binarySearch(arr , target){

  let left = 0;
  let right = arr.length - 1;


  while (left <= right){

    const mid = Math.floor((left + right) / 2);
    const value = arr[mid];


    if (value === target) {
      return mid;
     
    }else if (value < target) {
      left = mid + 1; 
    
    } else {
      right = mid - 1; 
    
    }
  }
  return -1;
}


let arr1 = [1,2,3,4,5];

console.log(binarySearch(arr1 , 5));


