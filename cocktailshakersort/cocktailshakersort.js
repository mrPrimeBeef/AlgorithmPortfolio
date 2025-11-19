const arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

export function cocktailShakerSort(arr) {
  function swap(arr, high, low) {
    let temp = arr[high];
    arr[high] = arr[low];
    arr[low] = temp;
  }

  let start = 0;
  let end = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false; 

    for (let i = 0; i < end - 1; i++) {
      let current = arr[i];
      let next = arr[i + 1];
      if (current > next) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    if (!swapped){
        break;
    }
    swapped = false;
    end--;

    for (let i = arr.length - 1; i > start; i--) {
      let current = arr[i];
      let next = arr[i - 1];
      if (current < next) {
        swap(arr, i - 1, i);
        swapped = true;
      }
    }
    start++;
  }

  return arr;
}

console.log(cocktailShakerSort(arr));
