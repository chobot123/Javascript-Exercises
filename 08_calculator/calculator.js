const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = (num) => {
  let sum = 0;
  for(let i=0;i<num.length;i++){
    sum += num[i];
  }
  return sum;
};

const multiply = (mult) => {
  let sum = 1;
  for(let i=0;i<mult.length;i++){
    sum *= mult[i];
  }
  return sum;
};

const power = (a,b) => {
	return a**b;
};

const factorial = (a) => {
  let sum = 1;
	while(a>1){
    sum *= a;
    a--;
  }
  return sum;
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
