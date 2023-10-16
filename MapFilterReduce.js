// map
// it is use to make new array after done some operation on that
let arr = [45, 67, 89]
let a = arr.map((value , index , array)=>{
  console.log(value , index ,array)
  return value + 1
})
console.log(a)

// filter method
let arr2 = [23,46 ,67,89,34 , 0,4, 5 ,8]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2)

//reduce
let arr3 =[1,2,3,5,2,1]
let newarr3 = arr3.reduce((h1,h2)=>{
  return h1 + h2
})
console.log(newarr3)