import getUserToken from './auth/getUserToken'
import getEnv from './env'
import getCreatedExam from './exam/getCreatedExam'

getUserToken(getEnv('EMAIL'), getEnv('PASSWORD'))
  .then(() => getCreatedExam())
  .then(console.log)