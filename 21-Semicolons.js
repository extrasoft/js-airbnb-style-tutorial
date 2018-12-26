/* Semicolons
21.1 ควรใส่ ; เมื่อจบ statement

// ไม่ดี
(function() {
  const name = 'Skywalker'
  return name
})()

// ดี
(() => {
  const name = 'Skywalker';
  return name;
})();

// ดี (เป็นการป้องกันไม่ให้ฟังก์ชันถูกตีความเป็น argument เมื่อทำการต่อไฟล์สองไฟล์ที่ใช้ IIFEs)
;(() => {
  const name = 'Skywalker';
  return name;
})();
*/
