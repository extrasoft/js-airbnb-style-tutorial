/*
6.1 ใช้เขี้ยวเดียว (Single quotes) ''สำหรับสตริง

// ไม่ดี
const name = "Capt. Janeway";

// ดี
const name = 'Capt. Janeway';
6.2 สตริงที่ยาวกว่า 80 ตัวอักษร ควรจะแยกเขียนในหลายบรรทัด และค่อยทำการเชื่อมต่อกัน

6.3 หมายเหตุ: ไม่ควรใช้สตริงที่ยาวมากเกินไป เพราะจะมีผลต่อประสิทธิภาพของแอพพลิเคชั่น - jsPerf & Discussion

// ไม่ดี
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// ไม่ดี
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// ดี
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

6.4 เมื่อต้องการสร้างสตริงที่มีตัวแปร ให้ใช้เทมเพลตสตริง (Template strings) ซึ่งดีกว่าการเชื่อมสตริงด้วยตนเอง

เพราะว่าเทมเพลตสตริงจะทำให้อ่านง่ายกว่า

// ไม่ดี
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// ไม่ดี
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// ดี
function sayHi(name) {
  return `How are you, ${name}?`;
}
*/
