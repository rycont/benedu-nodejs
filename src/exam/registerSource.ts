import api from "../api";
import { Grade, Source, Subject, Year } from "../types/enums";
import { BriefExam } from "../types/types";
import { concat } from "../utils";

interface Args {
  subject: keyof typeof Subject;
  grade: keyof typeof Grade;
  year: keyof typeof Year;
  sourceId: string;
  sourceType: keyof typeof Source;
  examTitle: string;
  providedToken?: string;
}

const registerSource = async ({
	year,
	subject,
	sourceType,
	sourceId,
	grade,
	examTitle,
	providedToken
}: Args): Promise<BriefExam> => {
	const registered = (await api.json("/StudentStudy/SearchResultListSave", {
		selectedSubject: concat(subject, Subject),
		selectedId: sourceId,
		checkedQuestionGrade: concat(grade, Grade),
		checkedQuestionSource: concat(sourceType, Source),
		checkedQuestionLevel: "",
		inputQuestionYear: Year[year] + "|" + Year[year],
		inputIbtName: examTitle,
		SearchType: "aCyhptkQ83vKtp43Ilt83Q{e}{e}",
	}, providedToken))[0] as {
    IBT_ID: string;
    SBJ_CODE: string
    SBJ_NAME: string
    IBT_NAME: string
    IBT_QUESTION_COUNT: number,
    IBT_SOURCE: Source.지필고사
  };
	return {
		examId: registered.IBT_ID,
		examTitle: registered.IBT_NAME,
		questionQuantity: registered.IBT_QUESTION_COUNT
	};
};

export default registerSource;