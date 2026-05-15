const jsonString = '{"product": "咖啡機", "price": 2500, "stock": 5}';

function checkStock(json) {
  const data = JSON.parse(json); // 將 JSON 字串轉為物件
  return `商品：${data.product}，庫存狀態：${data.stock > 0 ? "有貨" : "缺貨"}`;
}
console.log(checkStock(jsonString));