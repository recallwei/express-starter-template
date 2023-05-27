// NOTE: Written global types here.
import type { Response } from 'express'

interface ErrorResponseModel {
  code?: number | string
  message?: string
}

interface BaseResponseModel<T> extends ErrorResponseModel {
  data: T
}

export interface PageRequestModel {
  pageNum: number
  pageSize: number
}

export interface PageResponseModel extends PageRequestModel {
  total: number
}

export type BaseResponse<T = any> = Response<BaseResponseModel<T> | ErrorResponseModel>

export type BasePageResponse<T = any> = Response<(BaseResponseModel<T> & PageResponseModel) | ErrorResponseModel>
