export interface ThumbnailItem {
  id: number;
  url: string;
}


export interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string | null;
  demo_link: string | null;         // Live demo / URL website
  github_link: string | null;  // Repository Github / source code
  technology: string[];       // Array stack teknologi (contoh: ["Laravel", "react"])
  is_featured: boolean;
  category_role_id: number;
  image: string;              // URL gambar
  thumbnails: ThumbnailItem[] | null;         // URL gambar
  created_at: string;
  updated_at: string;
}

export interface PaginationLinkItem {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: PaginationLinkItem[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface ProjectsApiResponse {
  data: ProjectItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
