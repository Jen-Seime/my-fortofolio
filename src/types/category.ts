// src/types/category.ts
export interface CategoryItem {
    id: number;
    name: string;
}

export interface categoriesApiResponse {
    data: CategoryItem[];
}
