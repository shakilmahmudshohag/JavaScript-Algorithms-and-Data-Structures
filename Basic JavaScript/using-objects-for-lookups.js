function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
// After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.


  result = lookup[val];
  // Only change code above this line
  return result;
}