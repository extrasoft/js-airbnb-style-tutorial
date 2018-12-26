/* Variables

13.1 ใช้ const ในการประกาศตัวแปรเสมอ ถ้าไม่ใช้จะมีผลให้ตัวแปรที่ประกาศขึ้นใหม่เป็นตัวแปรแบบ global ซึ่งอาจมีผลต่อไฟล์หรือโมดูลอื่นๆ

// ไม่ดี
superPower = new SuperPower();

// ดี
const superPower = new SuperPower();
13.2 ใช้หนึ่ง const ต่อหนึ่งตัวแปร

เพราะดูง่ายกว่า และป้องกันข้อผิดพลาดได้ อย่างเช่น บางครั้งใส่สลับกันระหว่าง ; และ , ซึ่งทำให้ได้ผลลัพธ์ที่ผิด

// ไม่ดี
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// ไม่ดี
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// ดี
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
13.3 ประกาศ const ไว้ที่เดียวกัน จากนั้นตามด้วยการประกาศ let ไว้ที่เดียวกัน (อย่าสลับไปมา) และใส่ตัวแปรที่ยังไม่ได้กำหนดค่าไว้ด้านล่างเสมอ

เพราะเมื่อต้องการที่จะกำหนดค่าให้กับตัวแปรโดยใช้ตัวแปรที่ประกาศไปก่อนหน้านั้น จะสามารถทำได้ง่ายกว่า

// ไม่ดี
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// ไม่ดี
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// ดี
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
13.4 ประกาศตัวแปรในที่ๆเหมาะสม (จากวิจารณญาณของเราเอง โดยคิดว่าจะทำให้โค้ดมีระเบียบและอ่านง่ายมากขึ้น)

เพราะว่า let และ const จะมีค่าอยู่แค่ในปีกกาที่ประกาศ (Block-scoped) เท่านั้น จึงปลอดภัย

// ดี
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  const name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// ไม่ดี - unnecessary function call
function(hasName) {
  const name = getName();

  if (!hasName) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// ดี
function(hasName) {
  if (!hasName) {
    return false;
  }

  const name = getName();
  this.setFirstName(name);

  return true;
}
*/
