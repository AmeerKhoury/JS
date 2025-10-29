
// Compose

function compose(...functions) {
  return function(...args) {
    if (functions.length === 0) return args[0];

    let result = functions[functions.length - 1](...args);
    for (let i = functions.length - 2; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

// Pipe

function pipe(...functions) {
  return function(...args) {
    if (functions.length === 0) return args[0];

    let result = functions[0](...args);
    for (let i = 1; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  };
}




const greet = function(name) {
  return 'hello ' + name;
};

const exclaim = function(str) {
  return str.toUpperCase() + '!';
};

const welcome = compose(exclaim, greet);
console.log('compose result:', welcome('phillip')); 
// "HELLO PHILLIP!"


const add2 = function(num) {
  return num + 2;
};

const multiplyBy3 = function(num) {
  return num * 3;
};


const addAndMultiply = pipe(add2, multiplyBy3);
console.log('pipe result 1:', addAndMultiply(5)); 
// (5 + 2) * 3 = 21

const addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
console.log('pipe result 2:', addAndMultiplyTwice(5)); 
// ((5 + 2) * 3) * 3 = 63
