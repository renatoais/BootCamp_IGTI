///testanto funções
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(compareNumbers(10, 10));

function superSum(from, upto) {
  var sum = 0;
  for (var i = from; i <= upto; i++) {
    sum += i;
  }
  return sum;
}
console.log(superSum(1, 100));
