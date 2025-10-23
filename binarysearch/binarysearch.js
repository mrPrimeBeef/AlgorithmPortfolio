const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearch(searchFor, values) {
  let found = false;
  let count = 0;

  values = values.sort((a, b) => a - b);

  console.log(values);

  let min = 0;
  let max = values.length - 1;
  //Index
  let middle = max - Math.floor((max - min) / 2);

  while (!found) {
    middle = max - Math.floor((max - min) / 2);

    if (values[middle] == searchFor) {
      found = true;
      break;
    }
    if (values[middle] > searchFor) {
      console.log("Too High: " + values[middle]);
      max = middle - 1;
    }
    if (values[middle] < searchFor) {
      console.log("Too Low: " + values[middle]);
      min = middle + 1;
    }

    if (max - min < 0) {
      return -1;
    }

    count++;
    console.log("Count: " + count);
  }
  return middle;
}

console.log(binarySearch(20, values));

// npx mocha -> to run test.js
