import { environment } from "../constant/environment"
import { fetchApi } from "../utils/fetch"
import type { ProjectItem, ProjectsApiResponse } from "../types/project"

export const getProjects = async (page: number = 1, category?: number | string): Promise<ProjectsApiResponse> => {
    let url = `${environment.API_URL}/api/projects?page=${page}`;
    
    if (category && category !== "all") {
        url += `&category=${category}`;
    }

    return await fetchApi(url, {
        method: "GET",
    });
};



export const getProjectsBySlug = async (slug:string): Promise<ProjectItem> => {
    const url = `${environment.API_URL}/api/project/${slug}`;

    const response = await fetchApi(url, {
        method: "GET",
    });

    // Laravel API Resource membungkus data dalam property "data"
    return response.data ?? response;
}

export const getRelatedProjects = async (category_role_id:number): Promise<ProjectItem[]> => {
    const url = `${environment.API_URL}/api/projects/related/${category_role_id}`;

    const response = await fetchApi(url, {
        method: "GET",
    });

    // Laravel API Resource membungkus data dalam property "data"
    return response.data ?? response;
}