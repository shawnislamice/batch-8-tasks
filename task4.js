function findAddress(info) {
  const street = info.street || "__";
  const house = info.house || "__";
  const society = info.society || "__";
  const str = street + "," + house + "," + society;
  return str;
}
const target = {
  street: 10,
  house: "15A",
  society: "Bangladesh",
};
const target2 = {
  street: 10,
  
};
const result = findAddress(target2);
console.log(result);


// function findAddress(info) {
//   const street = info.street !== undefined ? info.street : "__";
//   const house = info.house !== undefined ? info.house : "__";
//   const society = info.society !== undefined ? info.society : "__";
//   const str = street + "," + house + "," + society;
//   return str;
// }

// const target = {
//   street: 10,
//   house: "15A",
//   society: "Bangladesh",
// };
// const target2 = {
//   street: 10,
// };

// const result = findAddress(target2);
// console.log(result); 
