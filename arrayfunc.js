let nameArray = ['Shweta', 'Anushka', 'Gaurav', 'Neha', 'Ankita'];

// Changing value in an array with map
nameArray = nameArray.map(name => {
  if (name.endsWith('a')) {
    name = name + " Thakur"
  }
  return name.toUpperCase();
});

console.log(nameArray);