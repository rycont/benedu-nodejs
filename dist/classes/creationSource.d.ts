import { Grade, Subject, Year } from "../types/enums";
export declare class CreationSource {
    title: string;
    subject: keyof typeof Subject;
    grade: keyof typeof Grade;
    sourceId: string;
    constructor(title: string, subject: keyof typeof Subject, grade: keyof typeof Grade, sourceId: string);
}
export declare class RegularExamSource extends CreationSource {
    year: keyof typeof Year;
    constructor(title: string, subject: keyof typeof Subject, grade: keyof typeof Grade, sourceId: string, year: keyof typeof Year);
    register(title?: string): Promise<import("../types/types").BriefExam>;
}
