function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number";
  } else {
    return number ** 3;
  }
}
const target = '5';
const result = cubeNumber(target);
console.log(`The cube of your given number is: ${result}`);
