import {parse as HTMLParser} from "fast-html-parser";
import { BriefExam, Subject } from "../types/paper";
import api from "../api";

const getCreatedExam = async (): Promise<BriefExam[]> => {
  const fetched = await api.html("/StudentStudy/TestListList");
  return (fetched.querySelectorAll("#TestList-table tbody tr").map((exam) => {
    const [, , , , , subject, , examTitle, , questionQuantity, , , , , , , , , , , , startedAt] = exam
      .childNodes
      .map((e) => e.rawText
        .trim());
    return ({
      subject: (subject as Subject),
      examTitle,
      questionQuantity: +questionQuantity,
      startedAt: new Date(startedAt),
      examId: exam.attributes.value,
    });
  }));
};

export default getCreatedExam;
