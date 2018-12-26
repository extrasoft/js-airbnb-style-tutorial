/* Accessors
24.1 Accessor functions (ฟังก์ชันที่ใช้ในการเข้าถึงพรอพเพอร์ตี้) ไม่จำเป็นต้องมีก็ได้

24.2 แต่ถ้ามีควรจะตั้งชื่อในรูปแบบ getVal() และ setVal('hello')

// ไม่ดี
dragon.age();

// ดี
dragon.getAge();

// ไม่ดี
dragon.age(25);

// ดี
dragon.setAge(25);
24.3 ถ้าพรอพเพอร์ตี้เป็นค่าบูลีน (boolean) ให้ใช้ isVal() หรือ hasVal().

// ไม่ดี
if (!dragon.age()) {
  return false;
}

// ดี
if (!dragon.hasAge()) {
  return false;
}
24.4 ความจริงแล้วตั้งชื่อ get() และ set() ก็ไม่เสียหายอะไร แต่ต้องตั้งให้เหมือนกันในทุกๆที่

class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
*/
