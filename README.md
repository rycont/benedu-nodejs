# benedu-nodejs
Do Something Fun🤣, Based on Benedu2020

# Example
```typescript
import getUserToken from './auth/getUserToken'
import getTaskExamList from './exam/getTaskExamList'
(async () => {
  await getUserToken({
    username: 'username',
    password: 'password'
  })
  console.log(await getTaskExamList()) // Print 과제
})()
```
```typescript
import getTaskExamList from './exam/getTaskExamList'
getTaskExamList({
  providedToken: "ASPAUTHTOKEN"
}).then(console.log)
```

# Functions
## login
베네듀 계정으로 로그인하고 토큰을 반환합니다. 토큰은 모듈 내부에 임시적으로 저장됩니다.
### Parameters
|           key |      description |   type | optional |   |
|--------------:|-----------------:|-------:|----------|---|
| username | 이메일 | string |         |   |
| password | 비밀번호 | string |         |   |
### Return Type
`Promise<string>`

## getTaskExamList
과제 목록을 반환합니다

### Parameters
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
| providedToken | 사용자 지정 토큰 | string | Y        |

### Return Type
`Promise<BriefExam[]>`

## getCreatedExam
생성된 문제은행 시험지를 반환합니다
### Parameters
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
| providedToken | 사용자 지정 토큰 | string | Y        |
### Return Type
`Promise<BriefExam[]>`

## getBeforeRegularExam
이전 지필고사 정보를 반환합니다
### Parameters
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
| subject | 과목코드 | Subject | N        |
|grade|학년코드|Grade|N|
|year|연도코드|Year|N|
| providedToken | 사용자 지정 토큰 | string | Y        |
### Return Type
`Promise<RegularExamSource[]>`

# Classes
## CreationSource
문제은행의 원본이 되는 시험지의 정보를 담습니다
### Fields
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
| title | 소스 이름 | string | N        |
|subject|과목코드|Subject|N|
|grade|연도코드|Grade|N|
| sourceId | 사용자 지정 토큰 | string | Y        |
### Methods
#### register
##### Parameters
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
| title | 등록할 이름 | string | Y        |
| providedToken | 사용자 지정 토큰 | string | Y        |
##### Return Type
`Promise<BriefExam[]>`
### Subclasses
#### RegularExamSource
이전 지필고사 정보를 담는 클래스입니다
##### Additional
|           key |      description |   type | optional |
|--------------:|-----------------:|-------:|----------|
|year|연도코드|Year|N|

![](./docs/image/regular_exam_register_demo.png)
# Contributor
[RyCont](https://github.com/rycont)

# To-Do
- [ ] Create new exam
- [ ] Benedu2020 Coverage 100%
- [ ] Deno Port
