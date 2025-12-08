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

// 15
const infixNotion2 = "3 + 4 * ( 5 - 2 )";

//  240
const infixNotion3 = "( 12 + 3 ) * ( 7 + 9 )";

const precedence = {
  "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1,
};

// numbers in queue and operators on stack
// if operator preceence is higher that stack head -> pop stack head
// if operator is closing ")" (the one who closes the open "(" ) pop all the operators off the stack onto the queue  

function ShuntingYard(input) {
  const queue = input.split(" ");

  let numberQueue = new Queue();
  let operatorStack = new Stack();

  // shift first element
  while (queue.length > 0) {
    let element = queue.shift();

    if (element === "(") {
      
    } else if (element === ")") {
      while (operatorStack.size() > 0 && operatorStack.peek() !== "(") {
        numberQueue.enqueue(operatorStack.pop());
      }
      operatorStack.pop();
      // if operator 
      // Number tries to convert element to number
    } else if (isNaN(Number(element))) {
      while (
        operatorStack.size() > 0 &&
        operatorStack.peek() !== "(" &&
        precedence[operatorStack.peek()] >= precedence[element]
      ) {
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

console.log(ShuntingYard(infixNotion3));
console.log(RPNCal(ShuntingYard(infixNotion3)));
