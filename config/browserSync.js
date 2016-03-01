(function () {
  'use strict';

  module.exports = {
    options: {
      notify: true,
      background: false,
      browser: 'firefox',
    },
    dev: {
      options: {
        files: [
          'public/{,*/}*.{html,js,css}',
        ],
        server: {
          baseDir: ['public'],
        },
      },
    }
  };
})();
