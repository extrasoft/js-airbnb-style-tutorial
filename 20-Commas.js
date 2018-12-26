/* Commas

20.1 อย่าวางจุลภาค , ไว้ด้านหน้า

// ไม่ดี
const story = [
    once
  , upon
  , aTime
];

// ดี
const story = [
  once,
  upon,
  aTime,
];

// ไม่ดี
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// ดี
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
20.2 ควรใส่จุลภาค , ต่อท้ายพรอพเพอร์ตี้ตัวสุดท้าย

เพราะว่าเวลาดูใน git diff จะเป็นการเพิ่มบรรทัดอย่างเดียว โดยไม่มีการลบบรรทัดก่อนหน้า นอกจากนั้น Transpilers เช่น Babel จะลบตัวจุลภาคนี้ออกเองเวลาคอมไพล์ ทำให้ไม่ต้องกังวลเกี่ยวกับ ปัญหาจุลภาคที่เกินมา ในบราวเซอร์เวอร์ชันเก่า

// ไม่ดี - git diff เมื่อไม่มีจุลภาคต่อท้าย
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale' // ลบตัวสุดท้ายออก
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb graph', 'modern nursing']
}

// ดี - git diff เมื่อมีจุลภาคต่อท้าย
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'], // เพิ่มบรรทัดอย่างเดียว
}

// ไม่ดี
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};

const heroes = [
  'Batman',
  'Superman'
];

// ดี
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];
*/
