const utility = `'use strict'

import { EXPS_CONFIG } from '../../config'
import {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  ExpressUtils,
  crypto,
  expressValidator
} from '@m92/express-utils'

const expressUtils = new ExpressUtils(EXPS_CONFIG)
const { CustomError, HttpClient, logger } = expressUtils

export {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  expressUtils,
  crypto,
  expressValidator,
  CustomError,
  HttpClient,
  logger
}
`

const utilityIndex = `'use strict'

import {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  expressUtils,
  crypto,
  expressValidator,
  CustomError,
  HttpClient,
  logger
} from './expressUtils'


export {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  expressUtils,
  crypto,
  expressValidator,
  CustomError,
  HttpClient,
  logger
}
`
const helperFiles = {
  utility,
  utilityIndex
}

export default helperFiles