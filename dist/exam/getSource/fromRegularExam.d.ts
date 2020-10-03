import { RegularExamSource } from "../../classes/creationSource";
import { Grade, Subject, Year } from "../../types/enums";
interface Args {
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    year: keyof typeof Year;
    providedToken?: string;
}
declare const fromRegularExam: ({ subject, grade, year, providedToken }: Args) => Promise<RegularExamSource[]>;
export default fromRegularExam;
