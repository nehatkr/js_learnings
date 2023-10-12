const Hello = ()=>{
  console.log("Hey how are you")
  return "Fine and you!"
}

function onePlusAvg(x,y){
  console.log("Done")
  // return 1 + (x + y)/2
  return Math.round(1 + (x + y)/2) //for roundfigure the number
}

// one more method of function deceleration
const sum = (p,q)=>{
  return p+q
}
let a = 1;
let b = 2;
let c = 3;

var v = Hello()
console.log(v)
console.log("One plus Average of a and b",onePlusAvg(a,b))
console.log("One plus Average of b and c",onePlusAvg(b,c))
console.log("One plus Average of a and c",onePlusAvg(a,c))
console.log("sume of two number is",sum(9,7))

