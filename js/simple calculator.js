
const calculator = (a,b,sign) => {
    if((typeof a === 'number' && !isNaN(a)) &&
      (typeof b === 'number' && !isNaN(b)) &&
      (sign === '+' || sign === '-' || sign === '*' || sign === '/')) {
      return eval(a + sign + b);
    } else return 'unknown value';
  }