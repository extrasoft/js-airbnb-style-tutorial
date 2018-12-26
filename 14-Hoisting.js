/* Hoistiong

14.1 เวลาคอมไพล์จาวาสคริปต์จะอ่านตัวแปร var ที่ประกาศไว้ก่อนหน้าสิ่งอื่นๆในสโคป แต่ค่าที่ใส่ให้ตัวแปรจะยังไม่ถูกอ่าน ส่วนการประกาศ const และ let จะใช้วิธีการใหม่ที่เรียกว่า Temporal Dead Zones (TDZ) อ่านเหตุผลของวิธีการใหม่นี้ได้จาก typeof is no longer safe

ผมขอสรุปคร่าวๆจากลิ๊งทางข้างต้นเผื่อคนที่ไม่มีเวลาอ่านนะครับ สำหรับ let และ const นั้น ภายในปีกกาเดียวกันจะไม่สามารถประกาศซ้ำกันสองครั้งได้ นอกจากนั้นตัวแปรจะมีค่าก็ต่อเมื่อคอมไพล์เลอร์อ่านถึงบรรทัดที่ประกาศตัวแปร ดังนั้น typeof foo (ถ้ายังไม่มีการประกาศตัวแปร foo) จะได้ผลลัพธ์เป็น ReferenceError แทนที่จะได้ undefined เหมือนใน ES5

// สมมุติว่าเราไม่ได้ประกาศตัวแปร notDefined
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

// ประกาศตัวแปรหลังจากใช้งาน ในจาวาสคริปต์นั้นทำได้ (ไม่มี error)
// เพราะว่าตัวแปรจะถูกคอมไพล์และดึงขึ้นมาไว้ข้างบนสโคป
// แต่ค่าของตัวแปรไม่ได้ถูกดึงขึ้นมาด้วย จึงทำให้ค่าของตัวแปรนั้นเป็น undefined
function example() {
  console.log(declaredButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

// ตัวอย่างเมื่อคอมไพล์เลอร์ทำงานในตัวอย่างข้างต้น
// คอมไพล์เลอร์จะอ่านตัวแปรและดึงขึ้นมาไว้ด้านบนของสโคป
function example() {
  var declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}

// using const and let
function example() {
  console.log(declaredButNotAssigned); // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
  const declaredButNotAssigned = true;
}
14.2 Anonymous function expressions - การประกาศฟังก์ชันโดยไม่ใส่ชื่อฟังก์ชัน คอมไพล์เลอร์จะอ่านตัวแปรและดึงขึ้นไปด้านบนของสโคป แต่จะยังไม่อ่านฟังก์ชัน

function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function() {
    console.log('anonymous function expression');
  };
}
14.3 Named function expressions - การประกาศฟังก์ชันโดยใส่ชื่อฟังก์ชัน ได้ผลลัพธ์เหมือนตัวอย่างก่อนหน้า

function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// ประกาศฟังก์ชันชื่อเดียวกับตัวแปร ก็ได้ผลลัพธ์เช่นเดียวกันกับตัวอย่างก่อนหน้า
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  }
}
14.4 Function declarations - การประกาศฟังก์ชันโดยไม่ได้ใส่ค่าฟังก์ชันให้ตัวแปร คอมไพล์เลอร์จะอ่านทั้งชื่อและฟังก์ชัน

function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}
*/
