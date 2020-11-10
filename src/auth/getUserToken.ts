import FormData from "form-data";
import {parse as HTMLParser} from "fast-html-parser";
import getRVT from "./getRVT";
import { fetch } from "../api";

interface Args {
  username: string;
  password: string;
  type?: |2;
}

const getUserToken = async ({username, password, type = 2} : Args): Promise<string> => {
	const { inputToken, cookieToken } = await getRVT();
    
	const formdata = new FormData();
	formdata.append("__RequestVerificationToken", inputToken);
	formdata.append("loginID", username);
	formdata.append("loginPW", password);
	formdata.append("loginGB", type);
	const fetched = (await fetch("http://benedu.co.kr/Home/Login", {
		method: "POST",
		headers: {
			"Cookie": `__RequestVerificationToken=${cookieToken};`
		},
		body: formdata as unknown as string,
		redirect: "manual"
	}));
	const fetchedText = await fetched.text();
	const fetchedToken = fetched.headers.get("set-cookie")?.split("Id=")[1].split("; ")[0];
	if(!fetchedToken) throw new Error(HTMLParser(fetchedText).querySelectorAll(".login-field span")[3].childNodes[0].rawText || "Cannot get token");
	return fetchedToken;
};

export default getUserToken;