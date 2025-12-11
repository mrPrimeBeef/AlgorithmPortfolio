const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];


// Time: O(log n)
// Space: O(1) hvis iterativ, O(log n) hvis rekursiv (stakken)

// this signature takes a logger so its easier or log or not
// export function binarySearch(searchFor, values, logger)
export function binarySearch(searchFor, values) {
  let found = false;
  let iterations = 1;
  // values = values.sort((a, b) => a - b);

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
      logger("Too High: " + values[middle]);
      max = middle - 1;
    }
    if (values[middle] < searchFor) {
      logger("Too Low: " + values[middle]);
      min = middle + 1;
    }

    if (max - min < 0) {
      found = false;
      break;
    }

    iterations++;
    logger("Count: " + iterations);
  }
  return { found, index: found ? middle : -1, iterations };
}
const logger = console.log;
console.log(binarySearch(28, values, logger));

// npx mocha -> to run test.js
