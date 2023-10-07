let sum = 0
let n = 7
n = Number.parseInt(n)
for(let i = 0; i < n; i++){
  sum += (i+1)
}
console.log("Sum of first "+n+"natural number is "+ sum)
// let obj = {
//   neha: 90,
//   shubh:45,
//   shivika:56,
//   ritika:57,
//   shiv:23
// }

// // for in loop
// for(let a in obj){
//   console.log("Marks of " + a + " are " + obj[a])
// }
// // for of loop
// for(let b of "Neha"){ //only work for array or string
//   console.log(b)
// }
// let has block level  scope
// var has a globle scope