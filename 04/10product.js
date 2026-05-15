const cartJSON = `[
  {"item": "滑鼠", "price": 500, "qty": 1},
  {"item": "鍵盤", "price": 1200, "qty": 2},
  {"item": "螢幕", "price": 4000, "qty": 1}
]`;

function calculateTotal(json) {
  const items = JSON.parse(json);
  let total = 0;
  for (let product of items) {
    total += product.price * product.qty;
  }
  return total;
}
console.log(`總金額為: $${calculateTotal(cartJSON)}`); // 輸出: 6900