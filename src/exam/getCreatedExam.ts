import {parse as HTMLParser} from "fast-html-parser";
import { BriefExam } from "../types/types";
import api from "../api";
import { Subject } from "../types/enums";

const getCreatedExam = async ({providedToken} : {providedToken?: string} = {}): Promise<BriefExam[]> => {
	const fetched = await api.html("/StudentStudy/TestListList", undefined, providedToken);
	return (fetched.querySelectorAll("#TestList-table tbody tr").map((exam) => {
		const [, , , , , subject, , examTitle, , questionQuantity, , , , , , , , , , , , startedAt] = exam
			.childNodes
			.map((e) => e.rawText
				.trim());
		return ({
			subject: (subject as keyof typeof Subject),
			examTitle,
			questionQuantity: +questionQuantity,
			startedAt: new Date(startedAt),
			examId: exam.attributes.value,
		});
	}));
};

export default getCreatedExam;
