// Big O = O (n*log n)

let iterations = 0;
export function quicksort(arr, low = 0, high) {
  if (low >= high) {
    return;
  }

  iterations++;

  let pi = partition(arr, low, high);

  quicksort(arr, low, pi - 1);
  quicksort(arr, pi + 1, high);
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
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let arr = [10, 7, 8, 9, 1, 5, 10, 3, 5, 6, 7, 1, 90];
let n = arr.length;

console.log(arr);
quicksort(arr, 0, n - 1);
console.log(arr);
console.log(`iterations: ${iterations}`);
