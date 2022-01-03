"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var serverConfig = "'use strict'\n\nconst {\n  PORT = 8080,\n  BODY_LIMIT = '5mb',\n  ALLOW_CORS_ORIGIN = '*',\n  ALLOW_CORS_METHODS = ''\n} = process.env\n\nconst SERVER_CONFIG = {\n  PORT,\n  BODY_LIMIT,\n  ALLOW_CORS_ORIGIN,\n  ALLOW_CORS_METHODS\n}\n\nexport default SERVER_CONFIG";
var expressConfig = "'use strict'\n\nconst {\n  SERVICE_NAME = '',\n  ERROR_NAME = 'CustomError',\n\n  OAUTH_POOL_ID = '',\n  OAUTH_ENDPOINT = '',\n\n  AAUTH_ENDPOINT = '',\n  AAUTH_API_KEY = '',\n\n  LOGGER_MODE = 'CONSOLE_VERBOSE',\n  LOGGER_REQ_RES_LOG_ENABLED = 'true',\n  LOGGER_REQ_RES_LOG_BODY_ENABLED = 'false',\n\n  DISABLE_CREDENTIAL_CRYPTOGRAPHY = 'false',\n  DISABLE_PAYLOAD_CRYPTOGRAPHY = 'false',\n  DISABLE_OAUTH = 'false',\n  DISABLE_AAUTH = 'false',\n\n  HTTP_CLIENT_BODY_LOG_ENABLED = 'false',\n\n  TIMEZONE = 'Asia/Kolkata'\n} = process.env\n\nconst REQUIRED_CONFIG = [\n  'SERVICE_NAME',\n  // 'OAUTH_ENDPOINT',\n  // 'AAUTH_ENDPOINT',\n  // 'AAUTH_API_KEY'\n]\n\nREQUIRED_CONFIG.forEach(function (key) {\n  if (!process.env[key]) {\n    console.error('[Error] Express Utils Config Missing:', key)\n    return process.exit(1)\n  }\n})\n\nconst EXPS_CONFIG = {\n  SERVICE_NAME,\n  ERROR_NAME,\n\n  OAUTH_POOL_ID,\n  OAUTH_ENDPOINT,\n\n  AAUTH_ENDPOINT,\n  AAUTH_API_KEY,\n\n  LOGGER_MODE,\n  LOGGER_REQ_RES_LOG_ENABLED: LOGGER_REQ_RES_LOG_ENABLED.toLowerCase().trim() === 'true',\n  LOGGER_REQ_RES_LOG_BODY_ENABLED: LOGGER_REQ_RES_LOG_BODY_ENABLED.toLowerCase().trim() === 'true',\n\n  DISABLE_CREDENTIAL_CRYPTOGRAPHY: DISABLE_CREDENTIAL_CRYPTOGRAPHY.toLowerCase().trim() === 'true',\n  DISABLE_PAYLOAD_CRYPTOGRAPHY: DISABLE_PAYLOAD_CRYPTOGRAPHY.toLowerCase().trim() === 'true',\n  DISABLE_OAUTH: DISABLE_OAUTH.toLowerCase().trim() === 'true',\n  DISABLE_AAUTH: DISABLE_AAUTH.toLowerCase().trim() === 'true',\n\n  HTTP_CLIENT_BODY_LOG_ENABLED: HTTP_CLIENT_BODY_LOG_ENABLED.toLowerCase().trim() === 'true',\n\n  TIMEZONE\n}\n\nexport default EXPS_CONFIG";
var configIndex = "'use strict'\n\nimport EXPS_CONFIG from './EXPS_CONFIG'\nimport SERVER_CONFIG from './SERVER_CONFIG'\n\nexport {\n  EXPS_CONFIG,\n  SERVER_CONFIG\n}\n";
var configFiles = {
  serverConfig,
  expressConfig,
  configIndex
};
var _default = configFiles;
exports.default = _default;