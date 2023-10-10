// problem 1:-Write a program to print the marks of a student in an object using for loop
// obj = {neha: 98, rohan: 70, aakash:7}
let marks = {
  Neha: 98,
  shubham:9,
  lovish:56,
  Monika:4
}
for(let i = 0; i<Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// pronlem 2 :-try same question using for in loop
for(let i in marks){
  console.log("The marks of " + i + " are " + marks[i])
}

// problem 3 :- Write a program to print "try again " until the user enter the correct number

let cn = 34;
let i
while(i != cn){
  console.log("Try again")
  i = prompt("Enter a number ")
}
console.log("You have entered a correct number")

// problem 4 :-Write a function to find mean of 5 numbers
const mean=(a, b, c, d ) =>{
  return(a + b + c + d)/4
}
console.log(mean(4,5,6,8))
