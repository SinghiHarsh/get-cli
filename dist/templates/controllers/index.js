"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var controllerBody = "'use strict'\n\nimport { ResponseBody } from '../helpers'\nimport { HealthModel } from '../models'\n\nconst HealthController = {\n  get\n}\n\nexport default HealthController\n\nasync function get (request, response, next) {\n  const data = await HealthModel.get()\n  const responseBody = new ResponseBody(200, 'Health Check Successful', data)\n  response.body = responseBody\n  process.nextTick(next)\n}\n";
var controllerIndex = "'use strict'\nimport HealthController from './Health'\n\nexport {\n  HealthController,\n}";
var controllerFiles = {
  controllerBody,
  controllerIndex
};
var _default = controllerFiles;
exports.default = _default;