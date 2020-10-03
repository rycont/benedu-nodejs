import { BriefExam } from "../types/types";
declare const getCreatedExam: ({ token }?: {
    token?: string | undefined;
}) => Promise<BriefExam[]>;
export default getCreatedExam;
