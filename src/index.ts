import fetch from 'node-fetch'
import api, { setFetch } from './api'
import getUserToken, { token } from './auth/getUserToken'
import getEnv from './env'
import getCreatedExam from './exam/getCreatedExam'

setFetch(fetch)

getUserToken(getEnv('EMAIL'), getEnv('PASSWORD'))
  .then(() => {
    console.log(token)
    return getCreatedExam()
  })
  .then(console.log)