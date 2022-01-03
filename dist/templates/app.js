"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var appContents = "'use strict'\nimport Express from 'express'\nimport cors from 'cors'\nimport bodyParser from 'body-parser'\nimport helmet from 'helmet' \nimport Routes from './api/routes'\nimport { SERVER_CONFIG } from './config'\nimport startServer from './startServer'\n\nconst { BODY_LIMIT, ALLOW_CORS_ORIGIN, ALLOW_CORS_METHODS } = SERVER_CONFIG\nconst app = new Express()\nconst corsOptions = {\norigin: ALLOW_CORS_ORIGIN,\nmethods: ALLOW_CORS_METHODS\n}\n\n// Middleware Initializations\napp.use(cors(corsOptions))\napp.use(bodyParser.json({ limit: BODY_LIMIT }))\napp.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))\napp.use(helmet())\n\n// Initialize Routes\nRoutes.init(app)\n\n// Start Server\nstartServer(app)\n\n// For testing\nmodule.export = app";
var _default = appContents;
exports.default = _default;