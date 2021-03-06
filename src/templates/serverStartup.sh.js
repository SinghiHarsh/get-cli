const serverStartUp = `##### Server Config
export PORT=8080
export BODY_LIMIT=5mb
export ALLOW_CORS_ORIGIN=*
export ALLOW_CORS_METHODS=OPTIONS,GET,POST,PUT,PATCH,DELETE
#
##### Express Utils Config
export SERVICE_NAME=API_BOILERPLATE
#
export OAUTH_POOL_ID=
export OAUTH_ENDPOINT=
#
export AAUTH_ENDPOINT=
export AAUTH_API_KEY=
#
##### Starting Server Locally
# cd /Path/to/project/root/directory/
npm start
#
##### Starting Server in PM2
# cd /Path/to/project/root/directory/
node server.js`

export default serverStartUp