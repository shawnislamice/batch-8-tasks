function sortMaker(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  const [a, b] = arr;
  if (a < 0 || b < 0) {
    return "Invalid Input";
  }
  if (a === b) {
    return "Equal";
  }
  if (a > b) {
    return [a, b];
  }
  if (b > a) {
    return [b, a];
  }
}

console.log(sortMaker([2, 3])); // Output: [3, 2]
