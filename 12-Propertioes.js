/* Properties
12.1 ใช้จุด . ในการเข้าถึงพรอพเพอร์ตี้ (properties)

const luke = {
  jedi: true,
  age: 28,
};

// ไม่ดี
const isJedi = luke['jedi'];

// ดี
const isJedi = luke.jedi;
12.2 ใช้วงเล็บก้ามปู [] ในการเข้าถึงพรอพเพอร์ตี้โดยการใช้ตัวแปร

const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
*/
