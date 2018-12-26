/*
3.1 ควรใช้ปีกกา {} ในการประกาศออบเจ็กต์

// ไม่ดี
const item = new Object();

// ดี
const item = {};
3.2 อย่าใช้คำสงวน เป็นคีย์ เพราะมันจะใช้ไม่ได้ใน IE8. อ่านเพิ่มเติม แต่ถ้าเราสร้างโมดูลของตัวเองก็สามารถใช้คำเหล่านี้ได้ (แต่ไม่ใช้จะดีกว่าในความเห็นของผมนะครับ)

// ไม่ดี
const superman = {
  default: { clark: 'kent' }, // default เป็นคำสงวน
  private: true,
};

// ดี
const superman = {
  defaults: { clark: 'kent' },
  hidden: true,
};
3.3 ใช้คำที่มีความหมายเหมือนกันแทนคำสงวน

// ไม่ดี
const superman = {
  class: 'alien', // class เป็นคำสงวน
};

// ไม่ดี
const superman = {
  klass: 'alien', // แปลงคำไม่ใช่สิ่งดี เพราะจะทำให้เดาความหมายได้ยาก
};

// ดี
const superman = {
  type: 'alien',
};

3.4 ถ้าต้องการสร้างพรอพเพอร์ตี้ของออบเจ็กต์จากตัวแปร (Dynamic property) ให้สร้างตอนที่ประกาศออบเจ็กต์โดยใช้ []

เพราะจะทำให้พรอพเพอร์ตี้ทั้งหมดถูกสร้างไว้ในที่เดียว ซึ่งทำให้ดูได้ง่ายกว่าการสร้างแยกกัน

function getKey(k) {
  return `a key named ${k}`;
}

// ไม่ดี
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true; // สร้างหลังจากประกาศออบเจ็กต์เสร็จแล้ว ทำให้มองยากกว่า

// ดี
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true, // สร้างตอนประกาศออบเจ็กต์ ทำให้มองเห็นพรอพเพอร์ตี้ของออบเจ็กต์ทั้งหมดในที่เดียว
};

3.5 สร้างเมท็อตโดยใช้วิธีการประกาศแบบย่อ (Object method shorthand)

// ไม่ดี
const atom = {
  value: 1,

  addValue: function (value) { // การประกาศแบบปกติ
    return atom.value + value;
  },
};

// ดี
const atom = {
  value: 1,

  addValue(value) { // การประกาศแบบย่อ ซึ่งตัดคีย์เวิร์ดฟังก์ชันออกไป ทำให้โค้ดอ่านง่ายขึ้น
    return atom.value + value;
  },
};

3.6 สร้องพรอพเพอร์ตี้โดยใช้วิธีการประกาศแบบย่อ (Property value shorthand)

เพราะว่าทำให้อ่านง่ายขึ้น และเข้าใจได้ง่ายกว่า

const lukeSkywalker = 'Luke Skywalker';

// ไม่ดี
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// ดี
const obj = {
  lukeSkywalker, // มีค่าเท่ากับด้านบนเพียงแต่ทำให้อ่านง่ายขึ้น (ถ้าต้องการให้ชื่อตัวแปรและชื่อพรอพเพอร์ตี้ต่างกัน ต้องใช้วิธีการประกาศแบบด้านบน)
};
3.7 พรอพเพอร์ตี้ที่ประกาศโดยใช้วิธีการประกาศแบบย่อ ให้ใส่ไว้ด้านบนสุดของการประกาศออบเจ็กต์

เพราะทำให้รู้ได้ว่าพรอพเพอร์ตี้ใด ที่ประกาศโดยใช้วิธีการประกาศแบบย่อ

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// ไม่ดี
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// ดี
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
*/
