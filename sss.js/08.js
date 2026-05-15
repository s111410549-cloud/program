// 1. 宣告變數
let user = "Guest";

// 2. 使用反引號建立 HTML 字串，並在 ${} 內加入三元運算子邏輯
// 邏輯：user 有值嗎？ 有的話顯示 user，沒有的話顯示 "Stranger"
const html = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;

// 3. 輸出結果
console.log(html); 
// 預期輸出: <h1>Welcome, Guest</h1>

// --- 測試「如果 user 沒值」的情況 ---
user = ""; // 或是 null
const html2 = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;
console.log(html2); 
// 預期輸出: <h1>Welcome, Stranger</h1>