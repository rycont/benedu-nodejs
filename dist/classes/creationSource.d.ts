import { Grade, Subject, Year } from "../types/enums";
interface CreationSourceArg {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
}
export declare class CreationSource {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
    constructor({ title, subject, grade, sourceId }: CreationSourceArg);
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
    register(title?: string): Promise<import("../types/types").BriefExam>;
}
export {};
