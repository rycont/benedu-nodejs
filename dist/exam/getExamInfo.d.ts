declare const getExamInfo: ({ examId, providedToken }: {
    examId: string;
    providedToken?: string | undefined;
}) => Promise<any>;
export default getExamInfo;
