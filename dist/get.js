"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _readline = _interopRequireDefault(require("readline"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _templates = require("./templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Packages import
// Files import
var MODE_0755 = parseInt('0755', 8);
var MODE_0666 = parseInt('0666', 8);
var DESTINATION_PATH = '.';

function init() {
  // Check if the current directory to initialize is empty or not.
  _checkEmptyDirectory(DESTINATION_PATH, function (empty) {
    if (empty) {
      _initializeApplication(DESTINATION_PATH);
    } else {
      _promptMessage('current destination is not empty. Wish to continue? [y/N]', 'DESTINATION_CHECK', function (ok) {
        if (ok) {
          _promptMessage('enter the directory name ', 'NEW_DIRECTORY', function (directoryName) {
            _makeDirectory(DESTINATION_PATH, directoryName);

            _initializeApplication(_path.default.join(DESTINATION_PATH, directoryName));
          });
        } else {
          console.error('Quit');
          process.exit(1);
        }
      });
    }
  });
}

function _checkEmptyDirectory(DESTINATION_PATH, cb) {
  _fs.default.readdir(DESTINATION_PATH, function (err, files) {
    if (err && err.code !== 'ENOENT') {
      throw err;
    }

    cb(!files || !files.length);
  });
}

function _initializeApplication(DESTINATION_PATH) {
  /* Application structure
      api
      |_ models/
        |_ index.js
      |_ controllers/
        |_ index.js
      |_ routes/
        |_ index.js
      config
        |_ index.js
  */
  _makeDirectory(DESTINATION_PATH, 'api');

  var {
    modelsBody,
    modelsIndex
  } = _templates.modelFiles;

  _makeDirectory(DESTINATION_PATH, 'api/models');

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/models', 'Health.js'), modelsBody);

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/models', 'index.js'), modelsIndex);

  _makeDirectory(DESTINATION_PATH, 'api/helpers'); // Express Utility methods imported -> contents taken from template can be changed in /template/helpers/index


  var {
    utility,
    utilityIndex
  } = _templates.helperFiles;

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/helpers', 'expressUtils.js'), utility);

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/helpers', 'index.js'), utilityIndex);

  _makeDirectory(DESTINATION_PATH, 'api/controllers');

  var {
    controllerBody,
    controllerIndex
  } = _templates.controllerFiles;

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/controllers', 'Health.js'), controllerBody);

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/controllers', 'index.js'), controllerIndex);

  _makeDirectory(DESTINATION_PATH, 'api/routes');

  var {
    routersBody,
    routeIndex
  } = _templates.routeFiles;

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/routes', 'Health.js'), routersBody);

  _writeFile(_path.default.join(DESTINATION_PATH, 'api/routes', 'index.js'), routeIndex);

  _makeDirectory(DESTINATION_PATH, 'config'); // Write server & express configs -> contents taken from template can be changed in /templates/config/index


  var {
    serverConfig,
    expressConfig,
    configIndex
  } = _templates.configFiles;

  _writeFile(_path.default.join(DESTINATION_PATH, 'config', 'index.js'), configIndex);

  _writeFile(_path.default.join(DESTINATION_PATH, 'config', 'EXPS_CONFIG.js'), expressConfig);

  _writeFile(_path.default.join(DESTINATION_PATH, 'config', 'SERVER_CONFIG.js'), serverConfig); // Babel file for transpiling code to es5 -> contents taken from template can be changed in /templates/babel.config.js


  var {
    babelContents
  } = _templates.babelConfig;

  _writeFile(_path.default.join(DESTINATION_PATH, '.babelrc'), JSON.stringify(babelContents, null, 2) + '\n'); // Create app.js file, which contains middleware and routes intialization -> contents taken from template can be changed in /templates/app.js file


  _writeFile(_path.default.join(DESTINATION_PATH, 'app.js'), _templates.appContents); // Create package.json file -> contents taken from template can be changed in /templates/PackageJson.js file


  var {
    packageContents
  } = _templates.packageJSON;

  _writeFile(_path.default.join(DESTINATION_PATH, 'package.json'), JSON.stringify(packageContents, null, 2) + '\n');

  _writeFile(_path.default.join(DESTINATION_PATH, 'server.js'), _templates.serverContent); // Create startServer file which listens on PORT,which helps in starting the server. contents taken from template can be changed in /templates/startServer.js file


  _writeFile(_path.default.join(DESTINATION_PATH, 'startServer.js'), _templates.startServerContent); // Shell file which helps in server startup


  _writeFile(_path.default.join(DESTINATION_PATH, 'start-local.sh'), _templates.serverStartUp);
}

function _promptMessage(message, type, callback) {
  var readLineData = _readline.default.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLineData.question(message, function (answer) {
    readLineData.close();

    if (type === 'DESTINATION_CHECK') {
      callback(/^y|yes|ok|true$/i.test(answer));
    } else if (type === 'NEW_DIRECTORY') {
      callback(answer);
    }
  });
}

function _writeFile(file, content) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MODE_0666;

  _fs.default.writeFileSync(file, content, {
    mode: mode
  });

  console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}

function _makeDirectory(base, directory) {
  var location = _path.default.join(base, directory);

  console.log('   \x1b[36mcreate\x1b[0m : ' + location + _path.default.sep);

  _mkdirp.default.sync(location, MODE_0755);
}