"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var babelConfig = {
  babelContents: {
    "presets": [["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]],
    "plugins": [["@babel/plugin-proposal-object-rest-spread", {
      "useBuiltIns": true
    }]]
  }
};
var _default = babelConfig;
exports.default = _default;