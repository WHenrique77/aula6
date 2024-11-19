var numbers = [10,20,30,40,50];
numbers.push(60);
numbers.pop();
var pos = numbers.indexOf(40)
numbers.splice(pos,1)
console.log(numbers)