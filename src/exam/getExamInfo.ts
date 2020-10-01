import api from "../api"

const getExamInfo = async (examId: string) => 
await api.json('/Utils/TestPrint', {
    type: 'ymWuGYYSOfmJLRPkt3xlfw{e}{e}',
    "values[]": examId
  })


export default getExamInfo