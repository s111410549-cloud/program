function filterEvens(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // 輸出: [2, 4, 6]