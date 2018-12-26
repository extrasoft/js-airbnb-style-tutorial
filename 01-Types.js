/*
1.1 Primitives: เมื่อใช้งานตัวแปรพื้นฐาน (ตัวแปรที่อ้างอิงด้วยค่า) สามารถเข้าใช้งานได้โดยอ้างอิงค่าของตัวแปร
  string
  number
  boolean
  null
  undefined

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9


1.2 Complex: เมื่อใช้งานตัวแปรที่มีความซับซ้อน (ตัวแปรที่อ้างอิงไปยังค่าที่อยู่ของตัวแปรอื่น) สามารถเข้าใช้งานได้โดยอ้างอิงค่าที่อยู่ของตัวแปรนั้นๆ
  object
  array
  function

const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9

*/
