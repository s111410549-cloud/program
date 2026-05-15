const student = {
  name: "小明",
  grades: [80, 90, 70],
  getAverage: function() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
};
console.log(`${student.name} 的平均分是: ${student.getAverage()}`); // 輸出: 80