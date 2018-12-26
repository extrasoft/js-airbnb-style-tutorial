/* Modules

10.1 ควรใช้งานโมดูลในรูปแบบที่ ES6 มีให้ (import/export) แทนการใช้งานโมดูลรูปแบบอื่นๆ เนื่องจากเราสามารถที่จะคอมไพล์ไฟล์เป็นโมดูลในระบบอื่นๆในภายหลังได้
เพราะว่าโมดูลจะเป็นรูปแบบที่ถูกใช้อย่างแพร่หลายในอนาคต

```javascript
// ไม่ดี
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// ดีที่สุด
import { es6 } from './AirbnbStyleGuide';
export default es6;
```
10.2 หลีกเลี่ยงการใช้ * ในการอิมพอร์ต

// ไม่ดี
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// ดี
import AirbnbStyleGuide from './AirbnbStyleGuide';
10.3 หลีกเลี่ยงการเอ็กพอร์ต โดยตรงจากอิมพอร์ต

เพราะว่ามันจะทำให้ดูยากขึ้น แล้วไม่ค่อยเคลียร์ ถึงแม้ว่ามันจะสั้นกว่าก็ตาม

// ไม่ดี
// filename es6.js
export { es6 as default } from './airbnbStyleGuide';

// ดี
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
*/
