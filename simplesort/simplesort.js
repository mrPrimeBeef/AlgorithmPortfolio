import { isSorted } from "../issorted/issorted.js";

const arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

export function simpleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let count = 0;
    while (arr.length - 1 > count) {
      let current = arr[count];
      let next = arr[count + 1];
      if (!(current <= next)) {
        swap(arr, count, count + 1);
      }

      function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        //   console.log(arr);
      }
      count++;
    }
  }
  return arr;
}

console.log(simpleSort(arr));
