"use strict";
self.addEventListener('fetch', function (event) {
  console.log(location)
  if (/(\.jpe?g|\.png)$/.test(event.request.url)) {
    var supportsWebp = false;
    if (event.request.headers.has('accept')) {
      supportsWebp = event.request.headers.get('accept').includes('webp');
    }
    if (supportsWebp) {
      var req = event.request.clone();
      console.log(req.url)
      var returnUrl = req.url + "?imageView2/0/format/webp/q/75";
      event.respondWith(
        fetch(returnUrl, {
          mode: 'no-cors'
        })
      );
    }
  }
});