import getUserToken from './auth/getUserToken'
import getEnv from './env'
import getGeneratedExam from './exam/getGeneratedExam'

getUserToken(getEnv('EMAIL'), getEnv('PASSWORD')).then(() => getGeneratedExam()).then(console.log)