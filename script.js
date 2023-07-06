const operate = (a, b, op) => {
    if (op = "+") {
        return add(a, b);
    }
    if (op = "-") {
        return subtract(a, b);
    }
    if (op = "*") {
        return multiply(a, b);
    }
    if (op = "/") {
        return divide(a, b);
    }
};

const add = (a, b) => {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const multiply = (a, b) => {
    return (a*b);
};

const divide = (a, b) => {
    return (a/b);
};

// const sum = function() {
//   let sum = 0;
//   for (let i = 0; i < arguments[0].length; i++) {
//     sum = sum + arguments[0][i];
//   }
//   return sum;
// };

// const multiply = function() {
//   if (arguments[0].length == 0) {return 0};
//   let res = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     res = res*(arguments[i]);
//   }
//   return res;
// };

// const power = function(a, b) {
//   let res = a;
// 	for (let i = 1; i < b; i++) {
//     res = res * a;
//   }
//   return res;
// };

// const factorial = function(a) {
// 	let res = a;
//   while (a > 2) {
//     res = res*(a-1);
//     a--;
//   }
//   if (res == 0) {
//     return 1;
//   }
//   return res;
// };
