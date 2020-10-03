import api from "../api"

const getExamInfo = async (examId: string, providedToken?: string) => 
await api.json('/Utils/TestPrint', {
    type: 'ymWuGYYSOfmJLRPkt3xlfw{e}{e}',
    "values[]": examId
  }, providedToken)


export default getExamInfo