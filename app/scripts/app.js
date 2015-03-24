(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    var app = document.querySelector("#app");
    app.appName = 'firebase oauth example';
    app.page = 'home';
    console.log(app);
    
  });


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
