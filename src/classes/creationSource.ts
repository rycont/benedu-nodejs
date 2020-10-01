import registerSource from "../exam/registerSource";
import { Grade, Source, Subject, Year } from "../types/enums";

export class CreationSource {
  public title: string
  public subject: keyof typeof Subject
  public grade: keyof typeof Grade
  public sourceId: string
  constructor(title: string, subject: keyof typeof Subject, grade: keyof typeof Grade, sourceId: string) {
    this.title = title
    this.subject = subject
    this.grade = grade
    this.sourceId = sourceId
  }
}

export class RegularExamSource extends CreationSource {
  public year: keyof typeof Year
  constructor(title: string, subject: keyof typeof Subject, grade: keyof typeof Grade, sourceId: string, year: keyof typeof Year) {
    super(title, subject, grade, sourceId)
    this.year = year
  }
  register(title?: string) {
    return registerSource({
      year: this.year,
      subject: this.subject,
      sourceType: "지필고사",
      sourceId: this.sourceId,
      grade: this.grade,
      examTitle: title || this.title
    })
  }
}