'use strict';

var path = require('path');
var csl = require('./lib/util').csl;

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var options = {
    paths: {
      configPath: path.join(process.cwd(), 'grunt'),
      build: '.tmp',
    },
    pkg: grunt.file.readJSON('package.json'),
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  /**************************************************/
  /***************  Task Setting    *****************/
  /**************************************************/

  // 開発開始
  grunt.registerTask('serve', csl.info('ライブリロード開発を行います'), function (target) {
      return grunt.task.run([
        'initializeTask',
        'browserSync:dev',
      ]);
    });

  // ビルド
  grunt.registerTask('build', csl.info('ビルドを行い dist フォルダに配備します'), [
      'clean:build',
      'copy:build_index',
      'useminPrepare',
      'concat',
      'cssmin',
      'uglify',
      'usemin'
    ]);

  /**************************************************/
  /*************** Private Commands *****************/
  /**************************************************/

  var descriptionInnerCommand = csl.warn('実行しないでください、内部処理用タスクです。');

  // Initialize tasks
  // Gruntコマンド実行時に必ず実行するタスク
  grunt.registerTask('initializeTask', descriptionInnerCommand, function () {
    var tasks = [
      'browser_option',
    ];

    return grunt.task.run(tasks);
  });

  /**
  * --browserパラメーターで指定し、テストするブラウザを変更します。
  **/
  grunt.registerTask('browser_option', descriptionInnerCommand, function () {
    var updateBrowser = function(browser){
      grunt.config.merge({
        browserSync:{
            options: {
              browser: browser,
            }
        }
      });
    };

    var _envName = grunt.option('browser');
    switch (_envName){
      case 'firefox':
        updateBrowser('firefox');
        break;
      case 'chrome':
      default: // default browser chrome
        updateBrowser('google chrome');
        break;
    }
  });

  // 追加オプション説明用の空タスクです。(必ず末尾に記述)
  grunt.registerTask('customOptions', [
    csl.help('browser', '--browser=[引数]', 'の用に指定すると実行ブラウザを変更できます', ['firefox', 'chrome']),
  ].join(csl.newLine), function () {});
};
