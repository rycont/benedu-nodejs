import { BriefExam } from "../types/types";
import { Grade, Subject, Year } from "../types/enums";
interface CreationSourceArg {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
}
declare abstract class CreationSource {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
    constructor({ title, subject, grade, sourceId }: CreationSourceArg);
    abstract register({ title, providedToken }: {
        title?: string;
        providedToken?: string;
    }): Promise<BriefExam> | BriefExam;
}
interface RegularExamSourceArg {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
    year: keyof typeof Year;
}
export declare class RegularExamSource extends CreationSource {
    year: keyof typeof Year;
    constructor({ title, subject, grade, sourceId, year }: RegularExamSourceArg);
    register({ title, providedToken }: {
        title?: string;
        providedToken?: string;
    }): Promise<BriefExam>;
}
export {};
