/* Naming Conventions

23.1 ควรจะตั้งชื่อให้สื่อความหมาย

// ไม่ดี
function q() {
  // ...stuff...
}

// ดี
function query() {
  // ..stuff..
}
23.2 ใช้ camelCase (ขึ้นต้นด้วยตัวเล็กและคำต่อไปขึ้นต้นด้วยตัวใหญ่) เมื่อต้องการตั้งชื่อออบเจ็กต์, ฟังก์ชัน, และ instance

// ไม่ดี
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// ดี
const thisIsMyObject = {};
function thisIsMyFunction() {}
23.3 ใช้ PascalCase (ขึ้นต้นทุกคำด้วยตัวใหญ่) เมื่อต้องการตั้งชื่อ constructor หรือ class

// ไม่ดี
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// ดี
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
23.4 ขึ้นต้นด้วยขีดล่าง (_) เมื่อต้องการตั้งชื่อพรอพเพอร์ตี้ที่เป็น Private

// ไม่ดี
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// ดี
this._firstName = 'Panda';
23.5 อย่าบันทึกค่า this ไว้ใช้ ให้ใช้ Arrow functions หรือ Function#bind.

// ไม่ดี
function foo() {
  const self = this;
  return function() {
    console.log(self);
  };
}

// ไม่ดี
function foo() {
  const that = this;
  return function() {
    console.log(that);
  };
}

// ดี
function foo() {
  return () => {
    console.log(this);
  };
}
23.6 ถ้าในไฟล์มีแค่หนึ่งคลาส ให้ตั้งชื่อไฟล์ให้เป็นชื่อเดียวกับชื่อคลาส

// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// ไม่ดี
import CheckBox from './checkBox';

// ไม่ดี
import CheckBox from './check_box';

// ดี
import CheckBox from './CheckBox';
23.7 ใช้ camelCase เมื่อต้องการเอ็กพอร์ตฟังก์ชัน ชื่อไฟล์ควรเป็นชื่อเดียวกับชื่อฟังก์ชัน

function makeStyleGuide() {
}

export default makeStyleGuide;
23.8 ใช้ PascalCase เมื่อเอ็กพอร์ต Singleton / Function library / หรือ Bare object

const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
*/
