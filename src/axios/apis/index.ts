import axios from "@/axios/https";
import { IListRequest, IListResponse, ILoginRes } from './types';

// 登陆
export async function login(data: { email: string; password: string }) {
  return await axios.post<ILoginRes>('/qj/v1/auth/token/login/email', data);
}
// 获取职位列表
export async function getJobs(data: IListRequest) {
  return await axios.get<IListResponse>("/admin/v1/job/list", data);
}
// 获取公司列表
export async function getCompanyList(params: { type: string; companyIds: string }) {
  return await axios.get<{ id: number; name: string }[]>("/admin/v1/op/platform/filter", params );
}