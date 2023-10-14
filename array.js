let marks_class_12 = [91 , 78 , 88 , 98 , "Not present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5]) //will be undefined beacuse index 6 is not present
console.log("The length of marks_class_12 is " , marks_class_12.length)
marks_class_12[5] = 89 //adding a new value to the array
marks_class_12[1] = 92 //changing the  value of the array
console.log(marks_class_12)
console.log(typeof marks_class_12)
