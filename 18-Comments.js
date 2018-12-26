// 18.1 ใช้ /** ... */ สำหรับคอมเม้นต์ที่มากกว่าหนึ่งบรรทัด และควรจะบอกประเภทและค่าของพารามิเตอร์พร้อมทั้งค่าที่จะรีเทิร์น

// // ไม่ดี
// // make() returns a new element
// // based on the passed in tag name
// //
// // @param {String} tag
// // @return {Element} element
// function make(tag) {

//   // ...stuff...

//   return element;
// }

// // ดี
// /**
//  * make() returns a new element
//  * based on the passed in tag name
//  *
//  * @param {String} tag
//  * @return {Element} element
//  */
// function make(tag) {

//   // ...stuff...

//   return element;
// }
// 18.2 ใช้ // สำหรับคอมเม้นต์บรรทัดเดียว โดยใส่ไว้บรรทัดบนของสิ่งที่ต้องการคอมเม้นต์ และเพิ่มบรรทัดว่างไว้ด้านบนคอมเม้นต์ด้วย

// // ไม่ดี
// const active = true;  // is current tab

// // ดี
// // is current tab
// const active = true;

// // ไม่ดี
// function getType() {
//   console.log('fetching type...');
//   // set the default type to 'no type'
//   const type = this._type || 'no type';

//   return type;
// }

// // ดี
// function getType() {
//   console.log('fetching type...');

//   // set the default type to 'no type'
//   const type = this._type || 'no type';

//   return type;
// }
// 18.3 ใส่ FIXME หรือ TODO ไว้ด้านหน้าคอมเม้นต์ ซึ่งจะช่วยให้ผู้พัฒนาระบบท่านอื่นๆทราบได้ว่าสิ่งเหล่านั้นอาจจะต้องแก้ไข หรือยังไม่ได้ทำ (IDE บางตัวสามารถค้นหาคอมเม้นต์เหล่านี้อัตโนมัติ และบอกถึงสิ่งที่ควรจะแก้ไขหรือทำเพิ่ม)

// 18.4 ใช้ // FIXME: เพื่อบอกปัญหา

// class Calculator {
//   constructor() {
//     // FIXME: shouldn't use a global here
//     total = 0;
//   }
// }
// 18.5 ใช้ // TODO: เพื่อบอกแนวทางในการแก้ไขปัญหา (แต่ยังไม่ได้ทำ)

// class Calculator {
//   constructor() {
//     // TODO: total should be configurable by an options param
//     this.total = 0;
//   }
// }
