import { Grade, Source, Subject, Year } from "../types/enums";
import { BriefExam } from "../types/types";
interface Args {
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    year: keyof typeof Year;
    sourceId: string;
    sourceType: keyof typeof Source;
    examTitle: string;
    providedToken?: string;
}
declare const registerSource: ({ year, subject, sourceType, sourceId, grade, examTitle, providedToken }: Args) => Promise<BriefExam>;
export default registerSource;
