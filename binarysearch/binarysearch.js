const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

export function binarySearch(searchFor, values) {
  let found = false;
  let iterations = 1;
  // values = values.sort((a, b) => a - b);

  // console.log(values);

  let min = 0;
  let max = values.length - 1;
  //Index
  let middle = max - Math.floor((max - min) / 2);

  while (!found) {
    middle = min + Math.floor((max - min) / 2);

    if (values[middle] == searchFor) {
      found = true;
      break;
    }
    if (values[middle] > searchFor) {
      // console.log("Too High: " + values[middle]);
      max = middle - 1;
    }
    if (values[middle] < searchFor) {
      // console.log("Too Low: " + values[middle]);
      min = middle + 1;
    }

    if (max - min < 0) {
      found = false;
      break;
    }

    iterations++;
    // console.log("Count: " + iterations);
  }
  return {found, index: found?middle:-1, iterations};
}

console.log(binarySearch(241, values));

// npx mocha -> to run test.js
