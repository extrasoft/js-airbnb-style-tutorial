/* Control Statements

17.1 ในกรณีที่มีการใช้ control statement เช่น if, while และอื่นๆ มีความยาวเกินความยาวต่อบรรทัดสูงสุด ให้รวมกรุ๊ปแต่ละเงื่อนไขและขึ้นเป็นบรรทัดใหม่

// ไม่ดี
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// ไม่ดี
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}

// ไม่ดี
if (foo === 123
  && bar === 'abc') {
  thing1();
}

// ไม่ดี
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// ดี
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// ดี
if (
  (foo === 123 || bar === "abc")
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// ดี
if (foo === 123 && bar === 'abc') {
  thing1();
}

*/
