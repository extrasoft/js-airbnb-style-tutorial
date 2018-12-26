/*
7.1 ทุกครั้งที่จะประกาศฟังก์ชันให้ประกาศในรูปแบบ Function declarations (อย่าประกาศแบบ Function expressions)

เพราะ Function declarations มีชื่อให้เห็นชัดเจน เมื่อทำการดีบัคโค้ดจะสามารถเห็นชื่อฟังก์ชันใน Call stacks นอกจากนั้นจาวาสคริปต์จะ Hoisting ฟังก์ชันที่ประกาศแบบ Function declarations ทำให้สามารถเรียกใช้ฟังก์ชันได้ทุกที่ เมื่อใดที่ต้องการใช้งาน Function expressions ให้ใช้ Arrow Functions แทนเสมอ

// ไม่ดี
const foo = function () {
};

// ดี
function foo() {
}
7.2 Function expressions - การประกาศฟังก์ชันและใช้ตัวแปรในการอ้างอิงฟังก์ชันดังกล่าว (อาจจะไม่ใช้ตัวแปรในกรณีที่เป็น Anonymous function) ดังตัวอย่างต่อไปนี้

// immediately-invoked function expression (IIFE)
(() => {
  console.log('Welcome to the Internet. Please follow me.');
})();
7.3 อย่าประกาศฟังก์ชันประเภท Function Declarations ไว้ภายใน if, else, while, และอื่นๆ เพราะบราวเซอร์จะตีความหมายผิด ถ้าจำเป็นต้องประกาศ ให้ประกาศในรูปแบบของ Function Expressions

7.4 หมายเหตุ: ECMA-262 บอกไว้ว่าใน if, else, while, และอื่นๆ จะต้องประกอบไปด้วย statements เท่านั้น ซึ่งการประกาศฟังก์ชันประเภท Function Declarations ไม่ใช่ statement อ่านเพิ่มเติมเกี่ยวกับ ECMA-262

// ไม่ดี
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// ดี
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
7.5 อย่าตั้งชื่อพารามิเตอร์ว่า arguments เพราะมันจะไปทับออบเจ็กต์ arguments ที่จาวาสคริปต์มีให้ในทุกๆฟังก์ชัน

// ไม่ดี
function nope(name, options, arguments) {
  // ...stuff...
}

// ดี
function yup(name, options, args) {
  // ...stuff...
}

7.6 ให้ใช้ ... (Rest) แทนการใช้พารามิเตอร์ arguments

เพราะ ... สามารถทำให้รู้ว่าฟังก์ชันนั้นมีการรับค่าพารามิเตอร์ อีกทั้ง ... จะได้ค่าอาร์เรย์จริงๆ ไม่ใช่ค่าออบเจ็กต์เหมือน arguments

// ไม่ดี
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// ดี
function concatenateAll(...args) { // ทำให้รู้ว่าฟังก์ชันนี้รับพารามิเตอร์
  return args.join('');
}

7.7 ใส่ค่าเริ่มต้นให้กับพารามิเตอร์ทุกตัว (Default parameter)

// แย่มาก
function handleThings(opts) {
  // ไม่ควรเปลี่ยนค่าของพารามิเตอร์ อ่านเพิ่มเติมได้ที่ http://spin.atomicobject.com/2011/04/10/javascript-don-t-reassign-your-function-arguments
  // นอกจากนั้นถ้า opts เป็นเท็จ จะได้ค่าที่เป็นออบเจ็กต์ ซึ่งดูเหมือนว่า
  // จะเป็นค่าที่เราต้องการ แต่ความจริงนั้นจะทำให้เกิดบัค
  opts = opts || {};
  // ...
}

// แย่
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// ดี
function handleThings(opts = {}) {
  // ...
}
7.8 หลีกเลี่ยงการตั้งค่าที่ยากๆเป็นค่าเริ่มต้นของพารามิเตอร์

เพราะจะทำให้สับสนได้ง่าย

var b = 1;
// ไม่ดี
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3 เพราะว่ามีการกำหนดอาร์กิวเมนต์เป็น 3 ดังนั้นค่าเริ่มต้นจะไม่ถูกเรียก (= b++ ไม่ถูกเรียก)
count();  // 3
*/
