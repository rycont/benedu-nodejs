import api from "../../api";
import { Grade, Subject, Year } from "../../types/enums";

const concat = (key: string, dict: { [x: string]: string; }) => dict[key] + '|' + key

const fromRegularExam = async (subject: keyof typeof Subject, grade: keyof typeof Grade, year: keyof typeof Year) =>
  (await api.html('/StudentStudy/SearchResultList', {
    selectedSubject: concat(subject, Subject),
    checkedQuestionGrade: concat(grade, Grade),
    inputQuestionYear: Year[year] + '|' + Year[year],
    SearchType: "aCyhptkQ83vKtp43Ilt83Q{e}{e}"
  })).querySelectorAll('#MockTestList-table tbody tr').map(e => {
    const [, , , sourceSubject, , sourceTitle, , , , sourceGrade] = e.childNodes.map(e => e.childNodes?.[0].rawText)
    return {
      subject: sourceSubject.trim(),
      sourceTitle: sourceTitle.trim(),
      grade: +sourceGrade,
      sourceId: e.childNodes?.[11].childNodes[1].attributes.eId
    }
  })


export default fromRegularExam