function foo(x){
  if (x == null) { 
    return 0; //This line is problematic
  }
  return x;
}
console.log(foo(null)); // output 0
console.log(foo(undefined)); // output 0
console.log(foo(0)); //output 0