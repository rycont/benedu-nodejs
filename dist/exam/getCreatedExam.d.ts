import { BriefExam } from "../types/types";
declare const getCreatedExam: ({ providedToken }?: {
    providedToken?: string | undefined;
}) => Promise<BriefExam[]>;
export default getCreatedExam;
