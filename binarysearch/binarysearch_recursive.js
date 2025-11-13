const searchFor = 20;

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
let count = 0;

function binarySearchRecursive(search, values, start, end) {
  count++;
  if (end - start < 0) {
    return -1;
  }

  let middle = start + Math.floor((end - start) / 2);

  if (search === values[middle]) {
    return middle;
  } else if (search < values[middle]) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }

  return binarySearchRecursive(search, values, start, end);
}

console.log(
  `the index for ${searchFor} is: ${binarySearchRecursive(
    searchFor,
    values,
    0,
    values.length - 1
  )} and it took: ${count} times`
);
