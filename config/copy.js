(function () {
  'use strict';

  module.exports = {
    build_index: {
      files: [
        {
          expand: true,
          cwd: 'public',
          src: [
            'index.html',
            'favicon.ico',
          ],
          dest: 'dist',
          filter: 'isFile'
        },
      ],
    },
  };
})();
