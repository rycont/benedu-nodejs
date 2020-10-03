import { parse as HTMLParser } from "fast-html-parser";
import { token } from "./auth/getUserToken"
import FormData from 'form-data'
import getEnv from "./env"

let fetch: any

export const setFetch = (f: any) => fetch = f

export default {
  async get(uri: string, formdata?: FormData) {
    return await fetch(getEnv('API_URI') + uri, {
      body: formdata,
      headers: {
        ...(formdata && formdata.getHeaders()),
        Cookie: `ASP.NET_SessionId=${token}`
      },
      method: 'POST'
    })
  },
  async text(uri: string, config?: {
    [key: string]: string
  }) {
    console.log(uri, config)
    if (!config) return (await this.get(uri)).text()
    const formdata = new FormData()
    Object.entries(config).forEach(([key, value]) => formdata.append(key, value))
    return await (await this.get(uri, formdata)).text()
  },
  async html(uri: string, config?: {
    [key: string]: string
  }) {
    return HTMLParser(await this.text(uri, config))
  },
  async json(uri: string, config?: {
    [key: string]: string
  }) {
    return JSON.parse(await this.text(uri, config))
  }
}