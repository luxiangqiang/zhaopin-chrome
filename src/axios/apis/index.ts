import { httpRequester } from "@/axios/axios";
import { IListRequest, IListResponse } from './types'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwbHQiOiJBX1dFQl9QQyIsImlkIjozNjc4LCJleHAiOjE2NjIyODI4MDd9.ALk3p0M70D-9hC6h3xaCSU6puDOSkUXTwy5LTorDaNM'

// 获取职位列表
export function getJobs(data: IListRequest) {
  return httpRequester("/admin/v1/job/list", 'get', data, {token}) as Promise<{ data: IListResponse }>;
}

// 获取公司列表
export function getCompanyList(params: { type: string; companyIds: string }) {
  return httpRequester("/admin/v1/op/platform/filter", 'get', params, {token}) as Promise<{ data: { id: number; name: string }[] }>;
}