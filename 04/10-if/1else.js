function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} 是閏年`;
  } else {
    return `${year} 不是閏年`;
  }
}
console.log(isLeapYear(2024)); // 輸出: 2024 是閏年