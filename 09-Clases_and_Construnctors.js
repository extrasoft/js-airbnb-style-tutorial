/* Modules
9.1 ใช้ class และหลีกเลี่ยงการเรียกใช้ prototype โดยตรง

เพราะว่า class อ่านง่ายกว่า และง่ายต่อการเข้าใจ

// ไม่ดี
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// ดี
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
9.2 ใช้ extends ในการสืบทอดคลาส (Inheritance)

เพราะว่าวิธีนี้เป็นวิธีที่ ES6 ใช้ในการสืบทอดคลาส ซึ่งจะช่วยให้ฟังก์ชัน instanceof ทำงานได้อย่างถูกต้อง

// ไม่ดี
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// ดี
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
9.3 เมท็อตควรคืนค่าเป็นออบเจ็ค this เพื่อช่วยให้สามารถทำ Method chaining

// ไม่ดี
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// ดี
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
9.4 สามารถทำการ Overwrite เมท็อต toString() ได้แต่ควรจะตรวจสอบให้มั่นใจว่าจะไม่เกิดข้อผิดพลาดขึ้นได้ในอนาคต

class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
9.5 โดยปกติ class จะมี default constructor ถ้าไม่มีการระบุ constructor ใหม่ ดังนั้นการใส่ constructor ที่ว่างเปล่าจึงไม่มีความจำเป็น

// ไม่ดี
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// ไม่ดี
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// ดี
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
9.6 หลีกเลี้ยงการมีเมท็อตของคลาสที่มีชื่อเดียวกัน

การที่มีเมท็อตที่มีชื่อซ้ำกันในคลาสเดียวกันอาจทำให้เกิดบัค

// ไม่ดี
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// ดี
class Foo {
  bar() { return 1; }
}

// ดี
class Foo {
  bar() { return 2; }
}
*/
