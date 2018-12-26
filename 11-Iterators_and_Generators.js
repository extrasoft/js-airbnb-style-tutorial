/* Iterators and Generators

11.1 หลีกเลี่ยงการใช้ Iterators และหันมาใช้ Higher-order functions เช่น map() และ reduce() แทนการใช้งานลูปอย่าง for-of

เพราะว่าการทำงานกับ Pure functions นั้นดูง่ายกว่า และเพื่อเป็นการลดผลกระทบอื่นๆที่อาจจะตามมาได้

const numbers = [1, 2, 3, 4, 5];

// ไม่ดี
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// ดี
let sum = 0;
numbers.forEach((num) => sum += num);
sum === 15;

// ดีที่สุด (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
11.2 หลีกเลี่ยงการใช้งาน Generators (ณ ปัจจุบัน)

เพราะว่ายังไม่สามารถคอมไพล์กลับไปเป็น ES5 ได้อย่างสมบูรณ์

*/
