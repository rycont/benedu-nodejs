import { parse as HTMLParser } from "fast-html-parser";
import FormData from "form-data";
import { API_URI } from "./constants";

export let fetch: any;

export const setFetch = (f: any) => fetch = f;

export default {
	async get(uri: string, formdata?: FormData, providedToken?: string) {
		return await fetch(API_URI + uri, {
			body: formdata,
			headers: {
				...(formdata && formdata.getHeaders()),
				Cookie: `ASP.NET_SessionId=${providedToken}`
			},
			method: "POST"
		});
	},
	async text(uri: string, config?: {
    [key: string]: string
  }, providedToken?: string) {
		console.log(uri, config);
		if (!config) return (await this.get(uri, undefined, providedToken)).text();
		const formdata = new FormData();
		Object.entries(config).forEach(([key, value]) => formdata.append(key, value));
		return await (await this.get(uri, formdata, providedToken)).text();
	},
	async html(uri: string, config?: {
    [key: string]: string
  }, providedToken?: string) {
		return HTMLParser(await this.text(uri, config, providedToken));
	},
	async json(uri: string, config?: {
    [key: string]: string
  }, providedToken?: string) {
		return JSON.parse(await this.text(uri, config, providedToken));
	}
};