/*
4.1 ใช้วงเล็บก้ามปู [] ในการประกาศอาร์เรย์

// ไม่ดี
const items = new Array();

// ดี
const items = [];
4.2 ใช้ฟังก์ชัน Array#push ในการใส่ค่าเข้าไปในอาร์เรย์แทนการใส่ค่าโดยตรง

const someStack = [];

// ไม่ดี
someStack[someStack.length] = 'abracadabra';

// ดี
someStack.push('abracadabra');

4.3 ใช้ ... (Spreads) ในการทำสำเนาอาร์เรย์.

// ไม่ดี
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// ดี
const itemsCopy = [...items];
4.4 ใช้ฟังก์ชัน Array#form ในการแปลงอ็อบเจ็กต์เป็นอาร์เรย์

const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
*/
