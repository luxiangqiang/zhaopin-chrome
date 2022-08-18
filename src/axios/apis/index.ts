import { httpRequester } from "@/axios/axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwbHQiOiJBX1dFQl9QQyIsImlkIjozNjc4LCJleHAiOjE2NjIyODI4MDd9.ALk3p0M70D-9hC6h3xaCSU6puDOSkUXTwy5LTorDaNM'

// 获取职位列表
export function getJobs(data: any) {
  return httpRequester("/admin/v1/job/list", 'get', data, {token});
}