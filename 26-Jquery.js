/* jQuery

26.1 ใส่สัญลักษณ์ $ ไว้ด้านหน้าตัวแปรทุกตัวที่เป็น jQuery Object

// ไม่ดี
const sidebar = $('.sidebar');

// ดี
const $sidebar = $('.sidebar');
26.2 ในกรณีที่ต้องค้นหา DOM โดยใช้ jQuery ควรจะเก็บแคช (Cache) ไว้เสมอ เพราะการค้นหา DOM ซ้ำๆหลายรอบจะส่งผลต่อประสิทธิภาพของโค้ด

// ไม่ดี
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// ดี
function setSidebar() {
  const $sidebar = $('.sidebar'); // เก็บแคชในการค้นหาไว้ในตัวแปร เพื่อนำไปใช้ต่อไป
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
26.3 เวลาค้นหา DOM ให้ใช้รูปแบบของ Cascading เช่น $('.sidebar ul') หรือ parent > child $('.sidebar > ul') - jsPerf

26.4 ใช้ find ร่วมกับ jQuery object (ที่เราแคชไว้ก่อนหน้านี้)

// ไม่ดี
$('ul', '.sidebar').hide();

// ไม่ดี
$('.sidebar').find('ul').hide();

// ดี
$('.sidebar ul').hide();

// ดี
$('.sidebar > ul').hide();

// ดี
$sidebar.find('ul').hide();
*/
