// 1. 宣告物件 post
const post = {
    id: 1,
    title: "Hello World",
    content: "Markdown content"
};
// 方式二：中括號 (Bracket notation)
// 注意：括號內必須是「字串」(要加引號)
const title2 = post["title"];
console.log("方式二 (中括號):", title2);