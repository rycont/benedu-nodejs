import { RegularExamSource } from "../../classes/creationSource";
import { Grade, Subject, Year } from "../../types/enums";
declare const fromRegularExam: (subject: keyof typeof Subject, grade: keyof typeof Grade, year: keyof typeof Year) => Promise<RegularExamSource[]>;
export default fromRegularExam;
