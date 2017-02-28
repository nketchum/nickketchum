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
    var link_id = e.target.getAttribute('href').substring(1);

    var modals = {
      modal_cinders:    require('../ejs/modals/modal_cinders.ejs'),
      modal_fpd:        require('../ejs/modals/modal_fpd.ejs'),
      modal_coi:        require('../ejs/modals/modal_coi.ejs'),
      modal_rogers:     require('../ejs/modals/modal_rogers.ejs'),
      modal_colorvid:   require('../ejs/modals/modal_colorvid.ejs'),
      modal_telemundo:  require('../ejs/modals/modal_telemundo.ejs'),
      modal_nkwebdev:   require('../ejs/modals/modal_nkwebdev.ejs'),
      modal_mitravel:   require('../ejs/modals/modal_mitravel.ejs')
    };

    var modal = document.getElementById(link_id);
    content = modals[link_id]();
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
      clickOutside: false,
      onBeforeOpen: onModalOpen,
      onClose: onModalClose
    });
  }

  loadIndex();
  loadScripts();

};
