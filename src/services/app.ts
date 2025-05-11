import request from '@/utils/request'
import type { AppResponse } from './type/app'

export function chat(query: string): AppResponse {
  return request.post<AppResponse>('/app/chat', {
    query,
  })
}
