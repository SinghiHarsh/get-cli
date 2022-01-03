const modelsBody = `'use strict'
const HealthModel = {
  get
}

export default HealthModel

async function get () {
  return undefined
}`

const modelsIndex = `'use strict'
import HealthModel from './Health'

export {
  HealthModel,
}
`

const modelFiles = {
  modelsBody,
  modelsIndex
}

export default modelFiles