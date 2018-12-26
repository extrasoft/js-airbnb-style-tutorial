/* Whitespace
19.1 ควรตั้งค่าหนึ่งแท็บเท่ากับสองช่องว่าง (สามารถตั้งค่าใน Editor หรือ IDE ได้)

// ไม่ดี
function() {
∙∙∙∙const name;
}

// ไม่ดี
function() {
∙const name;
}

// ดี
function() {
∙∙const name;
}
19.2 ใส่ช่องว่างก่อนวงเล็บปีกกาเปิด

// ไม่ดี
function test(){
  console.log('test');
}

// ดี
function test() {
  console.log('test');
}

// ไม่ดี
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// ดี
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
19.3 ใส่ช่องว่างก่อนเปิดวงเล็บสำหรับ control statements (if, else, while, และอื่นๆ) แต่สำหรับพารามิเตอร์ไม่ต้องใส่ช่องว่าง

// ไม่ดี
if(isJedi) {
  fight ();
}

// ดี
if (isJedi) {
  fight();
}

// ไม่ดี
function fight () {
  console.log ('Swooosh!');
}

// ดี
function fight() {
  console.log('Swooosh!');
}
19.4 ใส่ช่องว่างเวลาประกาศตัวแปร

// ไม่ดี
const x=y+5;

// ดี
const x = y + 5;
19.5 ลงท้ายไฟล์ด้วยการขึ้นบรรทัดใหม่เสมอ (แค่หนึ่งบรรทัดเท่านั้น)

// ไม่ดี
(function(global) {
  // ...stuff...
})(this);
// ไม่ดี
(function(global) {
  // ...stuff...
})(this);↵
↵
// ดี
(function(global) {
  // ...stuff...
})(this);↵
19.5 ใส่ย่อหน้าเวลาเรียกใช้เมท็อตแบบต่อเนื่อง (Method chaining) ให้วางจุด . ไว้ด้านหน้าเสมอ เพื่อบอกว่าเป็นการเรียกเมท็อต

// ไม่ดี
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// ไม่ดี
$('#items').
  find('.selected').
    highlight().
    end().
  find('.open').
    updateCount();

// ดี
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// ไม่ดี
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// ดี
const leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);
19.6 ใส่บรรทัดว่างหลังจากจบบล็อก และก่อนที่จะขึ้น statement ใหม่

// ไม่ดี
if (foo) {
  return bar;
}
return baz;

// ดี
if (foo) {
  return bar;
}

return baz;

// ไม่ดี
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// ดี
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;
*/
