const add = function(...args) {
  const sum = args.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return sum;
};

const subtract = function(...args) {
	const total = args.reduce((prev, current) => {
    return prev - current;
  });

  return total;
};

const sum = function(array) {
	const sum = array.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return sum;
};

const multiply = function(array) {
  const product = array.reduce((prev, current) => {
    return prev * current;
  });

  return product;
};

const power = function(...args) {
	const power = args.reduce((prev, current) => {
    return prev ** current;
  });

  return power;
};

const factorial = function(number) {
  let factorial = 1;

  for (i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
