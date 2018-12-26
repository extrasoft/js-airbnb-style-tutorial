/* Events

25.1 เมื่อทำการเชื่อมต่ออีเว้นต์ ให้ส่งค่าที่เป็นออบเจ็กต์ไป ซึ่งจะดีกว่าการส่งค่าแบบธรรมดา เพราะจะช่วยให้ตัวเมท็อตที่รับค่าสามารถแก้ไขค่าและเพิ่มพรอพเพอร์ตี้ได้ง่ายขึ้น

// ไม่ดี
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function(e, listingId) {
  // do something with listingId
});
// ดี
$(this).trigger('listingUpdated', { listingId : listing.id });

...

$(this).on('listingUpdated', function(e, data) {
  // do something with data.listingId
});

*/
