/* Standard Library
ตัว Standard Library มี Utilities หลายตัวที่อาจจะทำงานผิดพลาดหรือไม่ถูกต้องแต่ยังมีให้ใช้อยู่ด้วยเหตุผลทางด้าน Legacy ดังนั้นให้เลือกใช้ตัวที่เหมาะสม

29.1 ใช้ Number.isNaN แทนที่จะใช้ isNaN ที่เป็นฟังก์ชัน Global

เพราะว่าฟังก์ชั่น isNaN ที่เป็น Global จะแปลงค่าที่ไม่ได้เป็น numbers ให้กลายเป็น numbers และ return ค่า true

// ไม่ดี
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// ดี
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
29.2 ใช้ Number.isFinite แทนที่จะใช้ isFinite ที่เป็นฟังก์ชั่น Global

เพราะว่าฟังก์ชั่น isFinite ที่เป็น Global จะแปลงค่าที่ไม่ได้เป็น numbers ให้กลายเป็น numbers และ return ค่า true

// ไม่ดี
isFinite('2e3'); // true

// ดี
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true
*/
