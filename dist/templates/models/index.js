"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var modelsBody = "'use strict'\nconst HealthModel = {\n  get\n}\n\nexport default HealthModel\n\nasync function get () {\n  return undefined\n}";
var modelsIndex = "'use strict'\nimport HealthModel from './Health'\n\nexport {\n  HealthModel,\n}\n";
var modelFiles = {
  modelsBody,
  modelsIndex
};
var _default = modelFiles;
exports.default = _default;