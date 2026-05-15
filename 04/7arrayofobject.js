const users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

function getAdultNames(userList) {
  const adults = userList.filter(user => user.age >= 18);
  return adults.map(user => user.name);
}
console.log(getAdultNames(users)); // 輸出: ["Bob", "Charlie"]