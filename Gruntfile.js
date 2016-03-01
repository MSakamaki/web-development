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

  grunt.registerTask('default', function () {
      console.log(csl.newLine + csl.info('HELLO TAKS RUNING'));
    });

  /**************************************************/
  /*************** Private Commands *****************/
  /**************************************************/
};
