import fetch, { RequestInfo, RequestInit } from "node-fetch"
import {parse as HTMLParser} from "fast-html-parser";
import { token } from "./auth/getUserToken"
import FormData from 'form-data'
import getEnv from "./env"

export default {
  async get(uri: string, config?: RequestInit) {
    return await fetch(getEnv('API_URI') + uri, {
      ...config,
      headers: {
        ...(config?.headers),
        Cookie: `ASP.NET_SessionId=${token}`
      }})
  },
  async text(uri: string, config?: {
    [key: string]: string
  }) {
    if (!config) return (await this.get(uri)).text()
    const formdata = new FormData()
    Object.entries(config).forEach(([key, value]) => formdata.append(key, value))
    return await (await this.get(uri, {
      body: formdata,
      method: 'POST',
      headers: formdata.getHeaders()
    })).text()
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