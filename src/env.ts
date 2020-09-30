import dotenv from 'dotenv'
dotenv.config()

const getEnv = (key: string) => process.env[key] || (() => {
  throw new Error(`Cannot find key ${key} from env`)
})()

export default getEnv