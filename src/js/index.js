'use strict';

window.onload = function() {

  var sticky = new Sticky('nav');
  var lazy = new LazyLoad();
  var modal = new Modal.default();

  // var xhr;
  // function getRequest(method, url, next) {
  //   xhr = new XMLHttpRequest();
  //   if (!xhr) {
  //     console.log('Error: Cannot create an XMLHttpRequest.');
  //     return;
  //   }
  //   xhr.onreadystatechange = next;
  //   xhr.open(method, url, true);
  //   xhr.send();
  // }

  // var getLogos = getRequest('GET', 'http://cms.nickketchum.dev/get/media/logo', function() {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if (xhr.status === 200) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.log('Error: Request was unsuccessful.');
  //     }
  //   }
  // });

  // const app = document.getElementById('app');
  // app.innerHTML = 'The title is: ' + document.title;

};
