function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide a string";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else if (!string1.includes(string2)) {
      return false;
    } else {
      return "There may an error";
    }
  }
}
let message = "John Doe";
let target = "JoHN";
const result = matchFinder(message.toLowerCase(), target.toLowerCase());
console.log(result)
if (result === true) {
  console.log("Match found");
} 
else if (result === false) {
  console.log("Match not found");
} 