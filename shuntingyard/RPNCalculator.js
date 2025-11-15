import Queue from "./queue.js";
import Stack from "./stack.js";

// const input = "3 4 + 2 *";
// const input2 = "12 6 + 2 /";
// const input3 = "5 2 ^";

function parseEx(input) {
  const queue = input.split(" ");
  return queue;
}

export function RPNCal(input) {
  const queue = parseEx(input);

  let stack = [];

  while (queue.length > 0) {
    let element = queue.shift();
    if (isNaN(Number(element))) {
      let a = stack.pop();
      let b = stack.pop();
      let result;

      switch (element) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b / a;
          break;
        case "^":
          result = Math.pow(b, a);
          break;
      }
      stack.push(result);
    } else {
      stack.push(Number(element));
    }
  }
  return stack;
}

// console.log(RPNCal(input3));

const infixNotion = "2 + 3 * 4";

const precedence = {
  "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1,
};

function ShuntingYard(input) {
  const queue = input.split(" ");

  let numberQueue = new Queue();
  let operatorStack = new Stack();

  while (queue.length > 0) {
    let element = queue.shift();

    if (isNaN(Number(element))) {
      while (operatorStack.size() > 0 && 
             precedence[operatorStack.peek()] >= precedence[element]) {
        numberQueue.enqueue(operatorStack.pop());
      }
      operatorStack.push(element);
    } else {
      numberQueue.enqueue(element);
    }
  }
  while (operatorStack.size() > 0) {
    numberQueue.enqueue(operatorStack.pop());
  }

  let result = "";
  while (numberQueue.size() > 0) {
    result += numberQueue.dequeue() + " ";
  }

  return result;
}

console.log(ShuntingYard(infixNotion));
console.log(RPNCal(ShuntingYard(infixNotion)));
