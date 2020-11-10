import { BriefExam } from "../types/types";
import registerSource from "../exam/registerSource";
import { Grade, Subject, Year } from "../types/enums";

interface CreationSourceArg {
  title: string;
  subject: keyof typeof Subject;
  grade: keyof typeof Grade;
  sourceId: string;
}

abstract class CreationSource {
  public title: string
  public subject: keyof typeof Subject
  public grade: keyof typeof Grade
  public sourceId: string
  constructor({ title, subject, grade, sourceId }: CreationSourceArg) {
  	this.title = title;
  	this.subject = subject;
  	this.grade = grade;
  	this.sourceId = sourceId;
  }
  abstract register({ title, providedToken }: { title?: string; providedToken?: string }): Promise<BriefExam> | BriefExam
}

interface RegularExamSourceArg {
  title: string
  subject: keyof typeof Subject;
  grade: keyof typeof Grade;
  sourceId: string;
  year: keyof typeof Year;
}

export class RegularExamSource extends CreationSource {
  public year: keyof typeof Year
  constructor({ title, subject, grade, sourceId, year }: RegularExamSourceArg) {
  	super({ title, subject, grade, sourceId });
  	this.year = year;
  }

  register({ title, providedToken }: { title?: string; providedToken?: string }) {
  	return registerSource({
  		year: this.year,
  		subject: this.subject,
  		sourceType: "지필고사",
  		sourceId: this.sourceId,
  		grade: this.grade,
  		examTitle: title || this.title,
  		providedToken: providedToken
  	});
  }
}