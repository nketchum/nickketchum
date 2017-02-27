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

  function onModalOpen(e) {
    var modal;
    var content;
    var link = e.target.getAttribute('href').substring(1);

    var content_cinders   = require('../ejs/modal_cinders.ejs');
    var content_fpd       = require('../ejs/modal_fpd.ejs');
    var content_coi       = require('../ejs/modal_coi.ejs');
    var content_rogers    = require('../ejs/modal_rogers.ejs');
    var content_colorvid  = require('../ejs/modal_colorvid.ejs');
    var content_telemundo = require('../ejs/modal_telemundo.ejs');
    var content_nkwebdev  = require('../ejs/modal_nkwebdev.ejs');
    var content_mitravel  = require('../ejs/modal_mitravel.ejs');

    if (link == 'modal_cinders') {
      var modal = document.getElementById('modal_cinders');
      content = content_cinders();
    }
    if (link == 'modal_fpd') {
      var modal = document.getElementById('modal_fpd');
      content = content_fpd();
    }
    if (link == 'modal_coi') {
      var modal = document.getElementById('modal_coi');
      content = content_coi();
    }
    if (link == 'modal_rogers') {
      var modal = document.getElementById('modal_rogers');
      content = content_rogers();
    }
    if (link == 'modal_colorvid') {
      var modal = document.getElementById('modal_colorvid');
      content = content_colorvid();
    }
    if (link == 'modal_telemundo') {
      var modal = document.getElementById('modal_telemundo');
      content = content_telemundo();
    }
    if (link == 'modal_nkwebdev') {
      var modal = document.getElementById('modal_nkwebdev');
      content = content_nkwebdev();
    }
    if (link == 'modal_mitravel') {
      var modal = document.getElementById('modal_mitravel');
      content = content_mitravel();
    }

    modal.innerHTML = content;
  }

  function onModalClose() {
    var modal = document.getElementById('modal_cinders');
    modal.innerHTML = '';
  }

  function loadScripts() {
    var sticky = new Sticky('nav');
    var lazy = new LazyLoad();
    var modal = new Modal.default({
      onBeforeOpen: onModalOpen,
      onClose: onModalClose
    });
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
