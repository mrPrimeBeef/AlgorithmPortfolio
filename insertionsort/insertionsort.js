// implemented with swapping

const arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

export function insertionSort(arr) {
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
  
  return { arr: arr, iterations: iterations, sorted: true };
}

console.log(insertionSort(arr));
