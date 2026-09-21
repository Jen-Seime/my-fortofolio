export interface ThumbnailItem {
  id: number;
  url: string;
}


export interface CertificationMediaItem {

  url: string;
 
  type: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  slug: string;
  issuer: string;
  issue_date: string;
  credential_id: string | null;
  description: string;
  verification_url: string | null;
  skills_covered: string[];
  created_at: string;
  updated_at: string;
  issuer_logo: CertificationMediaItem | null;
  pdf_file: CertificationMediaItem | null;
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

export interface CertificationApiResponse {
  data: CertificationItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
