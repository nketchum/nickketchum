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
    var target = e.target.getAttribute('href').substring(1);
    var contents;
    if (target == 'modal_cinders') {
      contents =
      '<p><img src="/images/full-coi-01.png"></p>' +
      '<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.</p>' +
      '<p>Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue.<p>' +
      '<p>Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<p>' +
      '<p>Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.<p>' +
      '<p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.<p>';
    }
    var extNode = document.getElementById('modal_cinders');
    extNode.innerHTML = contents;
  }

  function onModalClose() {
    var extNode = document.getElementById('modal_cinders');
    extNode.innerHTML = '';
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
