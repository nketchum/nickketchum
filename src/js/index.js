'use strict';

window.onload = function() {

  function loadIndex() {
    const app = document.getElementById('app');
    var clientele = require('../ejs/clientele.ejs');
    var projects = require('../ejs/projects.ejs');
    var personal = require('../ejs/personal.ejs');
    var skills = require('../ejs/skills.ejs');
    var modal = require('../ejs/modal.ejs');
    var index = clientele() + projects() + personal() + skills() + modal();
    app.innerHTML = index;
  }

  function loadScripts() {
    var sticky = new Sticky('nav');
    var lazy = new LazyLoad();
    var modal = new Modal.default();
  }

  loadIndex();
  loadScripts();

  // var xhr;
  // function getData(method, url, next) {
  //   xhr = new XMLHttpRequest();
  //   if (!xhr) {
  //     console.log('Error: Cannot create an XMLHttpRequest.');
  //     return;
  //   }
  //   xhr.onreadystatechange = next;
  //   xhr.open(method, url, true);
  //   xhr.send();
  // }
  // var theData = getData('GET', 'http://cms.nickketchum.dev/get/media/logo', function() {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if (xhr.status === 200) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.log('Error: Request was unsuccessful.');
  //     }
  //   }
  // });

};
