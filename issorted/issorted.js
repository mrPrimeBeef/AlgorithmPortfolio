export function isSorted(arr) {
  let isSorted = true;
  let count = 0;
  while (isSorted && arr.length - 1 > count) {
    let current = arr[count];
    let next = arr[count + 1];
    if (!(current <= next)) {
      isSorted = false;
      return isSorted;
    }
    count++;
  }
  return isSorted;
}

