import { environment } from "../constant/environment"
import type { expApiResponse } from "../types/experience"
import { fetchApi } from "../utils/fetch"

export const getExperiences = async () :Promise<expApiResponse> => {
    const url = `${environment.API_URL}/api/experiences`

    return fetchApi(url,{
        method: "GET",
    })
}