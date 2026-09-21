import { fetchApi } from "../utils/fetch";
import type { CertificationApiResponse, CertificationItem } from "../types/cerfication";
import { environment } from "../constant/environment";

export const getCertification = async (page: number = 1): Promise<CertificationApiResponse> => {
    const url = `${environment.API_URL}/api/Certification?page=${page}`;

    return await fetchApi(url, {
        method: "GET",
    });
}


export const getCertificationBySlug = async (slug:string): Promise<CertificationItem> => {
    const url = `${environment.API_URL}/api/Certification/${slug}`;

    const response = await fetchApi(url, {
        method: "GET",
    });

    // Laravel API Resource membungkus data dalam property "data"
    return response.data ?? response;
}