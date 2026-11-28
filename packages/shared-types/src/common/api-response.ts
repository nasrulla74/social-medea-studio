import type { ISODateTime } from './identifiers.js'

export interface ApiResponseMeta {
  requestId: string
  timestamp: ISODateTime
}

export interface ApiSuccessResponse<T> {
  success: true
  data: T
  meta: ApiResponseMeta
}

export interface ApiFieldError {
  field: string
  code: string
  message: string
}

export interface ApiError {
  code: string
  message: string
  fieldErrors?: ApiFieldError[]
}

export interface ApiErrorResponse {
  success: false
  error: ApiError
  meta: ApiResponseMeta
}

export type ApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiErrorResponse
