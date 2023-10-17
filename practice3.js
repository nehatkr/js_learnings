// filter for number divisible by 10 from a given array
let arr = [1,2,30,40,670,80]
let n = arr.filter((x)=>{
  return x%10 == 0
})
console.log(n)

// use reduce to calculate factorial of a given number from an array of first ( n natural number whose factorial needs to be calculated)
let arr1 = [1,2,3,4,5,6]
let n1 = arr1.reduce((x1 , x2)=>{
  return x1 * x2
})
console.log(n1)
