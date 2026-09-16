import { environment } from "../constant/environment"
import { fetchApi } from "../utils/fetch";

export const getProfiles = async() => {
    const url = `${environment.API_URL}/api/profil`;

    return fetchApi(url, {
        method: "GET",
    })
}