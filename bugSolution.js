function foo(x) {
  if (x === null || x === undefined) {
    return 0; 
  }
  return x;
}
console.log(foo(null)); // output 0
console.log(foo(undefined)); // output 0
console.log(foo(0)); // output 0