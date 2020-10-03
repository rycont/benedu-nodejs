import api from "../../api";
import { CreationSource, RegularExamSource } from "../../classes/creationSource";
import { Grade, Subject, Year } from "../../types/enums";
import { concat } from "../../utils";

const fromRegularExam = async (subject: keyof typeof Subject, grade: keyof typeof Grade, year: keyof typeof Year, providedToken?: string): Promise<RegularExamSource[]> =>
  (await api.html('/StudentStudy/SearchResultList', {
    selectedSubject: concat(subject, Subject),
    checkedQuestionGrade: concat(grade, Grade),
    inputQuestionYear: Year[year] + '|' + Year[year],
    SearchType: "aCyhptkQ83vKtp43Ilt83Q{e}{e}"
  }, providedToken)).querySelectorAll('#MockTestList-table tbody tr').map(e => {
    const [, , , sourceSubject, , sourceTitle, , , , sourceGrade] = e.childNodes.map(e => e.childNodes?.[0].rawText)
    return new RegularExamSource(
      sourceTitle.trim(),
      sourceSubject.trim() as keyof typeof Subject,
      sourceGrade.trim() + "학년" as keyof typeof Grade,
      e.childNodes?.[11].childNodes[1].attributes.eId,
      year
    )
  })


export default fromRegularExam