'use strict';

window.onload = function() {
  init();
  scripts();
};

function init() {
  var ejs = {
    clientele: require('../ejs/clientele.ejs'),
    projects:  require('../ejs/projects.ejs'),
    personal:  require('../ejs/personal.ejs'),
    skills:    require('../ejs/skills.ejs'),
    modal:     require('../ejs/modal.ejs')
  }
  var app = document.getElementById('app');
  app.innerHTML = ejs.clientele() + ejs.projects() + ejs.personal() + ejs.skills() + ejs.modal();
}

function scripts() {
  var lazy = new LazyLoad();
  var sticky = new Sticky('nav');
  var modal = new Modal.default({
    clickOutside: false,
    onBeforeOpen: onBeforeOpen
  });
}

function onBeforeOpen(e) {
  // Object key, link id, and modal div id MUST be identical.
  var ejs = {
    modal_cinders:    require('../ejs/modals/modal_cinders.ejs'),
    modal_fpd:        require('../ejs/modals/modal_fpd.ejs'),
    modal_coi:        require('../ejs/modals/modal_coi.ejs'),
    modal_rogers:     require('../ejs/modals/modal_rogers.ejs'),
    modal_colorvid:   require('../ejs/modals/modal_colorvid.ejs'),
    modal_telemundo:  require('../ejs/modals/modal_telemundo.ejs'),
    modal_nkwebdev:   require('../ejs/modals/modal_nkwebdev.ejs'),
    modal_mitravel:   require('../ejs/modals/modal_mitravel.ejs')
  };
  var id = e.target.getAttribute('href').substring(1);
  var modal = document.getElementById(id);
  modal.innerHTML = ejs[id]();
}
