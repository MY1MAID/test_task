export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  description?: string;
}
export interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface UserState {
  users: User[];
  user: User | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination | null;
}
