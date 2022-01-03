"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var serverStartUp = "##### Server Config\nexport PORT=8080\nexport BODY_LIMIT=5mb\nexport ALLOW_CORS_ORIGIN=*\nexport ALLOW_CORS_METHODS=OPTIONS,GET,POST,PUT,PATCH,DELETE\n#\n##### Express Utils Config\nexport SERVICE_NAME=API_BOILERPLATE\n#\nexport OAUTH_POOL_ID=\nexport OAUTH_ENDPOINT=\n#\nexport AAUTH_ENDPOINT=\nexport AAUTH_API_KEY=\n#\n##### Starting Server Locally\n# cd /Path/to/project/root/directory/\nnpm start\n#\n##### Starting Server in PM2\n# cd /Path/to/project/root/directory/\nnode server.js";
var _default = serverStartUp;
exports.default = _default;