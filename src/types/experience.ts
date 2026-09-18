export interface experienceItem {
    id: number;
    type: string;
    title: string;
    position:string;
    company: string;
    description: string;
    achievements:string[];
    start_date: Date;
    end_date: Date | null;
    techStack: string[];
}

export interface expApiResponse {
    data: experienceItem[];
}
