import { isSorted } from "../issorted/issorted.js";

// implemented with shifting

const arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

export function insertionSortShift(arr) {
  let iterations = 0;

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      iterations++;
    }
    arr[j + 1] = key;
  }

  return { arr: arr, iterations: iterations, sorted: isSorted(arr) };
}

console.log(insertionSortShift(arr));

// implemented with swap

const arr1 = [1, 8, 9, 4, 6, 7, 2, 5, 3];

export function insertionSortSwap(arr) {
  let iterations = 0;

  for (let i = 1; i < arr.length + 1; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
      iterations++;
    }
  }

  return { arr: arr, iterations: iterations, sorted: isSorted(arr) };
}

console.log(insertionSortSwap(arr1));
