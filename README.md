# benedu-nodejs
Do Something Fun🤣, Based on Benedu2020

# How to use
**Recomment to store credential with dotenv**
```typescript
import getUserToken from './auth/getUserToken'
import getTaskExamList from './exam/getTaskExamList'
(async () => {
  await getUserToken('username', 'password')
  console.log(await getTaskExamList()) // Print 과제
})()
```

# Functions
## Get Task Exams
```typescript
import getTaskExamList from './exam/getTaskExamList'
getTaskExamList().then(console.log)
```
```
[
  {
    subject: '영어',
    register: 'MASKED',
    examTitle: '2020년 9월  29일 화요일 1학년 영어 일일학습',
    questionQuantity: 6,
    solvedQuantity: 1,
    state: '응시중',
    endedAt: 2020-10-04T14:59:00.000Z,
    startedAt: 2020-09-28T15:00:00.000Z,
    examId: 'r660uc9In9GxtDVV8qPJmg{e}{e}'
  }...
]
```

## Get Created Exam(문제은행)
```typescript
import getCreatedExam from './exam/getCreatedExam'
getCreatedExam().then(console.log)
```
```
[
  {
    subject: '수학',
    examTitle: '(2020-09-30 09:29) 베네듀학습 - 수학 [수의 이해]',
    questionQuantity: 2,
    startedAt: 2020-09-30T00:00:00.000Z,
    examId: 'eMP7iqA7m5nkqmwDA8tVNw{e}{e}'
  }...
]
```

## Get Before Regular Exam
```typescript
import fromRegularExam from './exam/create/fromRegularExam'
fromRegularExam('국어', '1학년', '2019년').then(console.log)
```
```
[
  {
    subject: '국어',
    sourceTitle: '2019년 2학기 2차(기말) 지필고사 (1학년)',
    grade: 1,
    sourceId: 'G6DLLX0uKrThLpCTaeMKjQ{e}{e}'
  }...
]
```
# Contributor
[RyCont](https://github.com/rycont)

# To-Do
- [ ] Create new exam
- [ ] Benedu2020 Coverage 100%
- [ ] Deno Port
