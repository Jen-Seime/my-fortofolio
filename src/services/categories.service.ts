import { environment } from "../constant/environment"
import type { categoriesApiResponse } from "../types/category";
import { fetchApi } from "../utils/fetch";

export const getCategories = async ():Promise<categoriesApiResponse> => {
    const url = `${environment.API_URL}/api/category_role`;

    return fetchApi(url,{
        method : "GET",
    });
};