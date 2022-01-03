"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var routersBody = "'use strict'\n\nimport Express from 'express'\nimport { expressUtils } from '../helpers'\nimport { HealthController } from '../controllers'\n\nconst HealthRouter = new Express.Router()\nconst { get } = HealthController\n\nconst { reqHandler, resHandler } = expressUtils\nconst { extractHeaders, routeSanity, asyncWrapper } = reqHandler\nconst { setHeaders } = resHandler\n\nHealthRouter.use(extractHeaders)\n\nHealthRouter.get('/', routeSanity, asyncWrapper(get))\n\nHealthRouter.use(setHeaders)\n\nexport default HealthRouter\n";
var routeIndex = "'use strict'\n\nimport { ResponseBody, expressUtils } from '../helpers'\nimport HealthRouter from './Health'\n\nconst { middleware, resHandler } = expressUtils\nconst { handleResponse } = resHandler\n\nconst Routes = [\n  { path: '/health', router: HealthRouter },\n]\n\nRoutes.init = (app) => {\n  if (!app || !app.use) {\n    console.error('[Error] Route Initialization Failed: app / app.use is undefined')\n    return process.exit(1)\n  }\n\n  // Custom Routes\n  Routes.forEach(route => app.use(route.path, route.router))\n\n  // Final Route Pipeline\n  app.use('*', (request, response, next) => {\n    if (!request.isMatched) {\n      const { method, originalUrl } = request\n      const message = `Cannot ${method} ${originalUrl}`\n      const error = new ResponseBody(404, message)\n      response.body = error\n    }\n\n    return handleResponse(request, response, next)\n  })\n\n  // Route Error Handler\n  app.use((error, request, response, next) => {\n    if (!error) { return process.nextTick(next) }\n    console.log(error)\n\n    let { statusCode = 500, message } = error\n    let responseBody\n\n    if (error.constructor.name === 'ResponseBody') {\n      responseBody = error\n    } else {\n      responseBody = new ResponseBody(statusCode, message, error)\n    }\n\n    response.body = responseBody\n    return handleResponse(request, response, next)\n  })\n}\n\nexport default Routes\n";
var routeFiles = {
  routersBody,
  routeIndex
};
var _default = routeFiles;
exports.default = _default;