import FormData from 'form-data'
import {parse as HTMLParser} from 'fast-html-parser';
import getRVT from "./getRVT"
import { fetch } from '../api';

export let token: string

const getUserToken = async (username: string, password: string, type: |2 = 2): Promise<string> => {
  if (token) return token
  const { inputToken, cookieToken } = await getRVT()
  var myHeaders = new Headers();
  myHeaders.append("Cookie", `__RequestVerificationToken=${cookieToken};`); 
    
  var formdata = new FormData();
  formdata.append("__RequestVerificationToken", inputToken);
  formdata.append("loginID", username);
  formdata.append("loginPW", password);
  formdata.append("loginGB", type);
  const fetched = (await fetch("http://benedu.co.kr/Home/Login", {
    method: 'POST',
    headers: myHeaders,
    body: formdata as unknown as string,
    redirect: 'manual'
  }))
  const fetchedText = await fetched.text()
  const fetchedToken = fetched.headers.get('set-cookie')?.split('Id=')[1].split('; ')[0]
  if(!fetchedToken) throw new Error(HTMLParser(fetchedText).querySelectorAll('.login-field span')[3].childNodes[0].rawText || "Cannot get token")
  token = fetchedToken
  return fetchedToken
}

export default getUserToken