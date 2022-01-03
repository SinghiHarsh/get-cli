#!/usr/bin/env node
"use strict";

var _commander = require("commander");

var _get = require("../get");

var _package = _interopRequireDefault(require("../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = new _commander.Command();
var {
  version,
  name
} = _package.default;
program.name(name).version(version).command('init').action(() => {
  (0, _get.init)();
});
program.parse(process.argv);