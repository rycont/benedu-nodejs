import { BriefExam } from "../types/types";
import api from "../api";
import { Subject } from "../types/enums";

const getTaskExamList = async ({providedToken} : {providedToken?: string}): Promise<BriefExam[]> => {
  const fetched = await api.html("/StudentStudy/TaskListList", undefined, providedToken);
  return fetched.querySelectorAll("#TaskList-table tbody tr")
    .map((paper) => {
      const [,,, , ,
        subject,,
        register,,
        examTitle,,
        questionQuantity,,, ,
        solvedQuantity,,,,, , , ,
        startedAt,,
        endedAt,
      ] = paper.childNodes.map((e) => e.rawText.trim());
      return {
        subject: subject as keyof typeof Subject,
        register,
        examTitle,
        questionQuantity: Number(questionQuantity),
        solvedQuantity: Number(solvedQuantity),
        state: {
          "RX7CEmFfgzL6gqCunDqojQ{e}{e}": "미 응시",
          "ymWuGYYSOfmJLRPkt3xlfw{e}{e}": "응시중",
          "qlsPgUs{s}pzrJXatST3V3RA{e}{e}": "응시 완료",
        }[
          paper.attributes.sts as
            | "RX7CEmFfgzL6gqCunDqojQ{e}{e}"
            | "ymWuGYYSOfmJLRPkt3xlfw{e}{e}"
            | "qlsPgUs{s}pzrJXatST3V3RA{e}{e}"
        ],
        endedAt: new Date(endedAt),
        startedAt: new Date(startedAt),
        examId: paper.attributes.value,
      };
    })
    .filter((e) => e.solvedQuantity !== e.questionQuantity);
};

export default getTaskExamList;
