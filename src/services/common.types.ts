export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type PaginatedResponse<T> = {
  items: T
  pagination: Pagination
}
