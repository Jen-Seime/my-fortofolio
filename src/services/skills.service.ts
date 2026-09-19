import { environment } from "../constant/environment"
import type { skillsApiResponse } from "../types/skill";
import { fetchApi } from "../utils/fetch";

export const getSkills = async () :Promise<skillsApiResponse> => {
    const url = `${environment.API_URL}/api/skill`;

    return await fetchApi(url, {
        method: "GET",
    })
}