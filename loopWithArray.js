let num = [3, 54, 1, 2, 4]
// for(let i=0; i<num.length; i++){
//   console.log(num[i])
// }

// only work on array element
let arr = [];
num.forEach((element, index) => {
  console.log(index,' -> ', element);
  arr.push(element * 2);
})

console.log(arr);

// Array from
let name = "Neha"
let arr1 = Array.from(name)
console.log(arr1)

// for... of
for(let i of num){
  console.log(i)
} //print element
// for....in
for(let item in num){
  console.log(item)
  console.log(num[item])
} //print index