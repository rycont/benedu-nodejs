# benedu-nodejs
Do Something Fun🤣, Based on Benedu2020

# What can it do
## Get Task Exams
```typescript
import getUserToken from './auth/getUserToken'
import getEnv from './env'
import getCreatedExam from './exam/getCreatedExam'

getUserToken(getEnv('EMAIL'), getEnv('PASSWORD'))
  .then(() => getCreatedExam())
  .then(console.log)
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
import getUserToken from './auth/getUserToken'
import getTaskExamList from './exam/getTaskExamList'
import getEnv from './env'

getUserToken(getEnv('EMAIL'), getEnv('PASSWORD'))
  .then(() => getTaskExamList())
  .then(console.log)
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

# Contributor
[RyCont](https://github.com/rycont)

# To-Do
- [ ] Create new exam
- [ ] Benedu2020 Coverage 100%
- [ ] Deno Port
