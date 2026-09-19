export interface categorySkill {
    category : string
    skills : skillItem[]
}
export interface skillItem  {
    id : number,
    name : string,
    level : string,
    category : string
    image : string
}

export interface skillsApiResponse {
    data : categorySkill[]
}

export type categoriySkill = categorySkill;