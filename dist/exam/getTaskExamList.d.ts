import { BriefExam } from "../types/types";
declare const getTaskExamList: ({ providedToken }?: {
    providedToken?: string | undefined;
}) => Promise<BriefExam[]>;
export default getTaskExamList;
