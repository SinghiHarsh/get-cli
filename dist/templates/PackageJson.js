"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var packageJSON = {
  packageContents: {
    "name": "node-api-es7-starter",
    "version": "1.0.0",
    "description": "NodeJS API Server Boilerplate",
    "main": "server.js",
    "scripts": {
      "test": "jest",
      "init-test": "jest --init",
      "ip": "rm -rf node_modules && npm install",
      "start": "nodemon server.js",
      "generate-docs": "jsdoc -r . -d docs -c jsdoc.conf README.md"
    },
    "author": "Mehul Agarwal <agarwalmehul92@gmail.com>",
    "license": "ISC",
    "homepage": "https://github.com/agarwalmehul/node-api-es7-starter.git",
    "dependencies": {
      "@m92/express-utils": "0.0.68",
      "body-parser": "^1.19.0",
      "cors": "^2.8.5",
      "express": "^4.17.1",
      "helmet": "^3.21.2"
    },
    "devDependencies": {
      "@babel/cli": "^7.0.0",
      "@babel/core": "^7.8.3",
      "@babel/plugin-proposal-object-rest-spread": "^7.8.3",
      "@babel/preset-env": "^7.8.3",
      "@babel/register": "^7.8.3",
      "babel-jest": "^25.1.0",
      "jest": "^25.1.0",
      "jsdoc": "^3.6.3",
      "nodemon": "^2.0.2"
    }
  }
};
var _default = packageJSON;
exports.default = _default;