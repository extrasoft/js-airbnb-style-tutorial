/* Comparison Operators & Equality
15.1 ใช้ === และ !== แทน == และ !=

15.2 การเปรียบเทียบโอเปอเรเตอร์ จาวาสคริปต์จะแปลงค่าเหล่านั้นเป็น boolean โดยใช้ฟังก์ชัน ToBoolean และใช้กฎต่างๆดังต่อไปนี้:

Objects ได้ผลลัพธ์เป็น true
Undefined ได้ผลลัพธ์เป็น false
Null ได้ผลลัพธ์เป็น false
Booleans ได้ผลลัพธ์ ขึ้นอยู่กับค่าของ boolean
Numbers ได้ผลลัพธ์เป็น false ถ้า +0, -0, or NaN, นอกนั้นได้ true
Strings ได้ผลลัพธ์เป็น false ถ้า '', นอกนั้นได้ true
if ([0]) {
  // true
  // เพราะ array คือออบเจ็กต์
}
15.3 ใช้ Shortcuts

// ไม่ดี
if (name !== '') {
  // ...stuff...
}

// ดี
if (name) {
  // ...stuff...
}

// ไม่ดี
if (collection.length > 0) {
  // ...stuff...
}

// ดี
if (collection.length) {
  // ...stuff...
}
15.4 อ่านเพิ่มเติมได้ที่ Truth Equality and JavaScript โดย Angus Croll.
*/
