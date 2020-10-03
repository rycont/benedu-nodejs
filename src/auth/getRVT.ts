import {parse as HTMLParser} from 'fast-html-parser';
import { fetch } from '../api';

async function getRVT() {
  const fetched = (await fetch("http://benedu.co.kr/"))
  const inputToken = HTMLParser(await fetched.text()).querySelector('input').attributes.value
  const cookieToken = fetched.headers.get('set-cookie')?.split('n=')[1].split('; ')[0]
  if(inputToken && cookieToken)
  return {
    inputToken, cookieToken
  }
  throw new Error("Something wrong..")
}

export default getRVT