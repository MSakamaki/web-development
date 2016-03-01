var chalk = require('chalk');

var util = {
  csl: {
    emInfo: function (msg) {
      return chalk.bgBlack.white.bold(' ' + msg + ' ');
    },

    info: function (msg) {
      return chalk.blue.underline(msg);
    },

    warn: function (msg) {
      return chalk.yellow.bold(msg);
    },

    error: function (msg) {
      return chalk.red.bold.underline(msg);
    },

    ok: function (msg) {
      return chalk.green(msg);
    },

    help: function (command, example, description, pattern) {
      var patternMsg = pattern ? util.csl.newLine + '            指定可能な引数：' + pattern.join(' ') : '';
      return util.csl.info(('        --' + command).slice(-10)) + ': ' +
             chalk.bgCyan.bold(example) + description + patternMsg;
    },

    newLine: '\n',
  },
}

module.exports =  util;
