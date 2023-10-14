// array methods
// ctrl+s ;- format document
let num = [1, 2, 3, 56, 34]
let b = num.toString() //b is now a string
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
let r = num.pop() //poped returns the poped element
console.log(num, r)
let r1 = num.push(56) //push returns the new array length
console.log(num, r1)
let r2 = num.shift()
console.log(r2, num) //removes an element from the starting of an array
let r3 = num.unshift()
console.log(r3, num) //add a new element in the begning of the array
// delete method is is use to delete the element of of an given array but the length of an array is still same
console.log(num)
let compare = (a1, b1) => {
  return b1 - a1
}
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort() sort alphabetically
num1.sort(compare) // sort in acending order
console.log(num1)
num.reverse()
console.log(num) //it reverse the given array

