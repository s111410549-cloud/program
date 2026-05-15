function countdown(start) {
  let current = start;
  while (current >= 0) {
    console.log(`倒數中: ${current}`);
    current--;
  }
  console.log("發射！");
}
countdown(3);