import { isSorted } from "../issorted/issorted.js";

// Space: O(log n) i best case, O(n) i worst case Time: Best and average: Big O = O (n*log n) worst O(n^2) bad pivot
// not stabel
// worst case is sorted array

let iterations = 0;

export function quicksort(arr) {
  const low = 0;
  const high = arr.length-1;
  quicksortRecursive(arr, low, high);
  return {arr, iterations, sorted: isSorted(arr)};
}

export function quicksortRecursive(arr, low = 0, high) {
  if (low >= high) {
    return;
  }

  iterations++;


  let pi = partition(arr, low, high);

  //Left smaller than last pivot
  quicksortRecursive(arr, low, pi - 1);
  // right larger than last pivot
  quicksortRecursive(arr, pi + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  // swaps pivot to correct place - i + 1 (look at loop for i value) i is last element smaller than pivot - if none, i +1 makes pivot start arr
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [10, 7, 8, 9, 1, 5, 10, 3, 5, 6, 7, 1, 90];

const arr2 = [1,2,3,4,5];

console.log(arr2);
console.log(quicksort(arr2));