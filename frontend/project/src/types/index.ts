export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Item {
  id: number;
  title: string;
  description: string;
  // Add other fields that match your backend model
}