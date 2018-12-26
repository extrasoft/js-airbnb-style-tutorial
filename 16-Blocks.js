/* Blocks

16.1 ใช้วงเล็บปีกกา {} ในกรณีที่ประกาศบล็อกมากกว่าหนึ่งบรรทัด

// ไม่ดี
if (test)
  return false;

// ดี
if (test) return false; // วางไว้บรรทัดเดียวกันจะอ่านง่ายกว่า

// ดี
if (test) {
  return false;
}

// ไม่ดี
function() { return false; }

// ดี
function() { // ถ้ามีวงเล็บปีกกาให้วางไว้คนละบรรทัดจะอ่านง่ายกว่า
  return false;
}
16.2 ถ้าประกาศโดยมีทั้ง if และ else ให้ใส่ else ไว้บรรทัดเดียวกับวงเล็บปีกกาปิดของ if

// ไม่ดี
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// ดี
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
*/
