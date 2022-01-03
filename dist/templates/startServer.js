"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var startServerContent = "'use strict'\nimport { SERVER_CONFIG } from './config'\nconst { PORT } = SERVER_CONFIG\n\nconst startServer = async (app) => {\n    try {\n        await app.listen(PORT)\n        console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)\n    }\n    catch (error) {\n        console.log(error)\n        throw error\n    }\n}\n\nexport default startServer";
var _default = startServerContent;
exports.default = _default;