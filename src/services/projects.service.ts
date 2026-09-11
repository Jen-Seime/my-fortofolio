import { environment } from "../constant/environment"
import { fetchApi } from "../utils/fetch"

export const getProjects = async () => {
    const url = `${environment.API_URL}/api/projects`

    return await fetchApi(url, {
        method: "GET",
    });
};