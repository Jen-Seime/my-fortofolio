export interface EducationItem {
    id: number;
    institution: string;
    gpa:string;
    major: string;
    degree: string;
    coursework:string[]
    start_year: number;
    end_year: number | null;
    description: string;
   
}

export interface EducationApiResponse {
    data: EducationItem[];
   
}
