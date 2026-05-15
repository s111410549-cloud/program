let listA = [1, 2];
let listB = [3, 4];

function process(a, b) {
  // 1. 修改 (Mutation): 
  // a 指向 listA 的記憶體位址，執行 push 會直接改動原始陣列
  a.push(99);

  // 2. 重新賦值 (Re-assignment): 
  // b 原本指向 listB，但這裡將 b 指向一個全新的陣列 [100]
  // 這「切斷」了 b 與 listB 的連結，listB 本身完全不受影響
  b = [100];
}

process(listA, listB);

// 3. 輸出結果
console.log("listA:", listA); // 預期輸出: [1, 2, 99]
console.log("listB:", listB); // 預期輸出: [3, 4]