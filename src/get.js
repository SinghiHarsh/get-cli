// Packages import
import path from 'path'
import fs from 'fs'
import readLine from 'readline'
import mkdirp from 'mkdirp'

// Files import
import { packageJSON,appContents,babelConfig, serverContent,startServerContent, configFiles, helperFiles, modelFiles, controllerFiles, routeFiles, serverStartUp } from './templates'

const MODE_0755 = parseInt('0755', 8)
const MODE_0666 = parseInt('0666', 8)
const DESTINATION_PATH = '.'

export function init() {
  // Check if the current directory to initialize is empty or not.
  _checkEmptyDirectory(DESTINATION_PATH, function (empty) {
    if (empty) {
      _initializeApplication(DESTINATION_PATH)
    } else {
      _promptMessage('current destination is not empty. Wish to continue? [y/N]', 'DESTINATION_CHECK' ,function (ok) {
        if (ok) {
          _promptMessage('enter the directory name ', 'NEW_DIRECTORY', function (directoryName) {
            _makeDirectory(DESTINATION_PATH, directoryName)
            _initializeApplication(path.join(DESTINATION_PATH,directoryName))
          })
        } else {
          console.error('Quit')
          process.exit(1)
        }
      })
    }
  })
}

function _checkEmptyDirectory(DESTINATION_PATH, cb) {
  fs.readdir(DESTINATION_PATH, function (err, files) {
    if (err && err.code !== 'ENOENT') {
      throw err
    }
    cb(!files || !files.length)
  })
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
  _makeDirectory(DESTINATION_PATH, 'api')

  const { modelsBody, modelsIndex } = modelFiles
  _makeDirectory(DESTINATION_PATH, 'api/models')  
  _writeFile(path.join(DESTINATION_PATH, 'api/models', 'Health.js'), modelsBody)
  _writeFile(path.join(DESTINATION_PATH, 'api/models', 'index.js'), modelsIndex)

  _makeDirectory(DESTINATION_PATH, 'api/helpers')
  // Express Utility methods imported -> contents taken from template can be changed in /template/helpers/index
  const { utility, utilityIndex } = helperFiles
  _writeFile(path.join(DESTINATION_PATH, 'api/helpers', 'expressUtils.js'), utility)
  _writeFile(path.join(DESTINATION_PATH, 'api/helpers', 'index.js'), utilityIndex)

  _makeDirectory(DESTINATION_PATH, 'api/controllers')
  const { controllerBody, controllerIndex } = controllerFiles
  _writeFile(path.join(DESTINATION_PATH, 'api/controllers', 'Health.js'), controllerBody)
  _writeFile(path.join(DESTINATION_PATH, 'api/controllers', 'index.js'), controllerIndex)

  _makeDirectory(DESTINATION_PATH, 'api/routes')
  const { routersBody, routeIndex } = routeFiles
  _writeFile(path.join(DESTINATION_PATH, 'api/routes', 'Health.js'), routersBody)
  _writeFile(path.join(DESTINATION_PATH, 'api/routes', 'index.js'), routeIndex)

  _makeDirectory(DESTINATION_PATH, 'config')

  // Write server & express configs -> contents taken from template can be changed in /templates/config/index
  const { serverConfig, expressConfig, configIndex } = configFiles
  _writeFile(path.join(DESTINATION_PATH, 'config', 'index.js'), configIndex)
  _writeFile(path.join(DESTINATION_PATH, 'config', 'EXPS_CONFIG.js'), expressConfig)
  _writeFile(path.join(DESTINATION_PATH, 'config', 'SERVER_CONFIG.js'), serverConfig)

  // Babel file for transpiling code to es5 -> contents taken from template can be changed in /templates/babel.config.js
  const { babelContents } = babelConfig
  _writeFile(path.join(DESTINATION_PATH, '.babelrc'), JSON.stringify(babelContents, null, 2) + '\n')

  // Create app.js file, which contains middleware and routes intialization -> contents taken from template can be changed in /templates/app.js file
  _writeFile(path.join(DESTINATION_PATH, 'app.js'), appContents)

  // Create package.json file -> contents taken from template can be changed in /templates/PackageJson.js file
  const { packageContents } = packageJSON
  _writeFile(path.join(DESTINATION_PATH, 'package.json'), JSON.stringify(packageContents, null, 2) + '\n')

  _writeFile(path.join(DESTINATION_PATH, 'server.js'), serverContent)

  // Create startServer file which listens on PORT,which helps in starting the server. contents taken from template can be changed in /templates/startServer.js file
  _writeFile(path.join(DESTINATION_PATH, 'startServer.js'), startServerContent)

  // Shell file which helps in server startup
  _writeFile(path.join(DESTINATION_PATH, 'start-local.sh'),serverStartUp)
}

function _promptMessage(message, type, callback) {
  const readLineData = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readLineData.question(message, function (answer) {
    readLineData.close()
    if (type === 'DESTINATION_CHECK') {
      callback(/^y|yes|ok|true$/i.test(answer))
    }
    else if (type === 'NEW_DIRECTORY') {
      callback(answer)
    }
  })
}

function _writeFile(file, content, mode = MODE_0666) {
  fs.writeFileSync(file, content, { mode: mode })
  console.log('   \x1b[36mcreate\x1b[0m : ' + file)
}

function _makeDirectory(base, directory) {
  const location = path.join(base, directory)
  console.log('   \x1b[36mcreate\x1b[0m : ' + location + path.sep)
  mkdirp.sync(location, MODE_0755)
}
