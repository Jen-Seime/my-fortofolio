import { environment } from "../constant/environment"
import { fetchApi } from "../utils/fetch"
import type { ProjectsApiResponse } from "../types/project"

export const getProjects = async (page: number = 1, category?: number | string): Promise<ProjectsApiResponse> => {
    let url = `${environment.API_URL}/api/projects?page=${page}`;
    
    if (category && category !== "all") {
        url += `&category=${category}`;
    }

    return await fetchApi(url, {
        method: "GET",
    });
};