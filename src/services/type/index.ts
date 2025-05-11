export type BaseResponse<T> = {
  code: string
  message: string
  data: T
}

export type BasePaginationResponse<T> = BaseResponse<{
  list: T[]
  paginator: {
    total_page: number
    current_page: number
    total_record: number
    page_size: number
  }
}>
