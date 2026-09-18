import { environment } from "../constant/environment"
import type { EducationApiResponse } from "../types/education"
import { fetchApi } from "../utils/fetch"


export const getEducations = async () : Promise<EducationApiResponse> => {
    const url = `${environment.API_URL}/api/education`

    return fetchApi(url,{
        method: "GET",
    })
}