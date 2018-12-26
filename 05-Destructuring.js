/*
5.1 ใช้รูปแบบของ Destructuring เมื่อต้องการแปลงพรอพเพอร์ตี้ของอ็อบเจ็กต์ให้เป็นตัวแปร

เพราะจะได้ไม่ต้องสร้างตัวแปรชั่วคราวมารับพรอพเพอร์ตี้เหล่านั้น

// ไม่ดี
function getFullName(user) {
  const firstName = user.firstName; // ต้องสร้างตัวแปรทั่วคราวมารับค่า
  const lastName = user.lastName; // ต้องสร้างตัวแปรทั่วคราวมารับค่า

  return `${firstName} ${lastName}`;
}

// ดี
function getFullName(obj) {
  const { firstName, lastName } = obj; // ใช้ Destructuring ในการแปลงค่าอ็อบเจ็กต์ให้เป็นตัวแปร
  return `${firstName} ${lastName}`;
}

// ดีที่สุด
function getFullName({ firstName, lastName }) { // รับค่าโดยใช้ Destructuring
  return `${firstName} ${lastName}`;
}
5.2 ใช้รูปแบบของ Destructuring เมื่อต้องการแปลงอิลีเม้นท์ของอาร์เรย์ให้เป็นตัวแปร

const arr = [1, 2, 3, 4];

// ไม่ดี
const first = arr[0];
const second = arr[1];

// ดี
const [first, second] = arr; // ใช้ Destructuring ในการแปลงค่าอาร์เรย์ให้เป็นตัวแปร
5.3 ใช้ Destructuring ในรูปแบบออบเจ็กต์ในการส่งค่าหลายค่ากลับไปจากฟังก์ชัน (อย่าใช้ Destructuring ในรูปแบบอาร์เรย์ )

เพราะ Destructuring ในรูปแบบออบเจ็กต์จะทำให้ลำดับการส่งค่าไม่สำคัญ (สามารถสลับที่กันได้) เผื่อว่าในอนาคตเราอาจจะเพิ่มค่าเข้าไป ก็จะไม่ต้องกังวลเรื่องลำดับ

// ไม่ดี
function processInput(input) {
  return [left, right, top, bottom];
}

// คนที่เรียกใช้งานฟังก์ชันจะต้องคำนึงถึงลำดับของตัวแปรที่จะส่งไป
const [left, __, top] = processInput(input);

// ดี
function processInput(input) {
  return { left, right, top, bottom };
}

// คนที่เรียกใช้งานฟังก์ชันสามารถส่งเฉพาะค่าที่ตนเองต้องการ โดยมันจะจับคู่ให้อัตโนมัติ
const { left, right } = processInput(input);
*/
