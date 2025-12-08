const arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

// Big O = O(n*(log n))
// touches all element while loop O(n)
// stack call Log n -> binary tree

function merge(arrA, arrB) {
  const newArrSize = arrA.length + arrB.length;
  let newArr = new Array(newArrSize);
  let count = 0,
    i = 0,
    j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      newArr[count] = arrA[i];
      i++;
    } else {
      newArr[count] = arrB[j];
      j++;
    }
    count++;
  }
  while (i < arrA.length) {
    newArr[count] = arrA[i];
    i++;
    count++;
  }
  while (j < arrB.length) {
    newArr[count] = arrB[j];
    j++;
    count++;
  }
  return newArr;
}

export function mergeSort(arr, iterations, sorted) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort(arr));

// - `arr` - det nu sorterede array (ikke det samme som der blev modtaget)
// - `iterations` - antallet af iterationer (rekursioner OG loops)
// - `sorted` -
