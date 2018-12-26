/* Type Casting & Coercion

22.1 ทำการแปลงค่าไว้ด้านหน้าสุดเสมอ เพราะเวลาอ่านจะทราบได้ทันที่ว่าค่าที่จะได้ จะเป็นชนิดใด

22.2 สตริง:

//  => this.reviewScore = 9;

// ไม่ดี
const totalScore = this.reviewScore + '';

// ดี
const totalScore = String(this.reviewScore);
22.3 เวลาใช้ parseInt ในการแปลงค่าให้เป็นตัวเลข ควรจะใส่เลขฐานที่ต้องการแปลงด้วย เพราะถ้าไม่ใส่อาจจะมีข้อผิดพลาดได้ถ้าค่าที่แปลงเป็นสตริงที่ไม่ได้ประกอบไปด้วยตัวเลขทั้งหมด

const inputValue = '4';

// ไม่ดี
const val = new Number(inputValue);

// ไม่ดี
const val = +inputValue;

// ไม่ดี
const val = inputValue >> 0;

// ไม่ดี
const val = parseInt(inputValue);

// ดี
const val = Number(inputValue);

// ดี
const val = parseInt(inputValue, 10);
22.4 ในบางกรณีที่ต้องการให้ได้ประสิทธิภาพสูงสุดด้วยการใช้ Bitshift แทนการแปลงค่าโดยใช้ parseInt สามารถอ่านเพิ่มเติมได้ที่ performance reasons นอกจากนั้นควรใส่คอมเม้นต์ต่างๆอธิบายเหตุผลไว้ด้วย

// ดี

 * ถ้า parseInt ทำให้โค้ดช้า ให้ใช้
 * Bitshifting เพื่อแปลงค่าเป็นตัวเลขแทน
 * ซึ่งทำให้โค้ดสามารถทำงานได้เร็วขึ้นอย่างมาก
 
const val = inputValue >> 0;
22.5 ควรระวังการใช้งาน bitshift เพราะตัวเลขปกติจะเป็น 64-bit values, แต่ Bitshift จะคืนค่าเป็น 32-bit เสมอ (ที่มา) Bitshift อาจทำให้ค่าผิดแปลกไปถ้าค่าของตัวเลขใหญ่กว่า 32 bits. ดูการพูดคุยในเรื่องนี้ ตัวเลขที่มากที่สุดของ 32-bit Int คือ 2,147,483,647:

2147483647 >> 0 //=> 2147483647
2147483648 >> 0 //=> -2147483648 เกินค่ามากที่สุดของ 32-bit Int จึงทำให้เกิดข้อผิดพลาด
2147483649 >> 0 //=> -2147483647 เกินค่ามากที่สุดของ 32-bit Int จึงทำให้เกิดข้อผิดพลาด
22.6 Booleans:

const age = 0;

// ไม่ดี
const hasAge = new Boolean(age);

// ดี
const hasAge = Boolean(age);

// ดี
const hasAge = !!age;
*/
