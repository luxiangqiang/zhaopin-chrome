import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { BASE_URL } from './base';
import { getLocalstoryToken } from '@/utils/index';

export interface IErrorMsgDetails {
  fieldName: string;
  message: string;
}

export interface AjaxResponse<T> {
  success: boolean;
  code: number;
  message: string;
  errors?: IErrorMsgDetails[];
  data: T;
}

interface IDefauleHeader{
  platform: string;
  token?:string;
}

// 请求头
const defaultHeaders:IDefauleHeader = {
  platform: 'A_WEB_PC'
}
const getToken = async (header: IDefauleHeader) => {
  const token = await getLocalstoryToken();
  console.log(token)
  header.token = token as string;
}

export default {
  get: async <T>(url: string, data: any, headers?: AxiosRequestHeaders) => {
    await getToken(defaultHeaders)
    return new Promise((resolve, reject) => {
      axios({ 
        url: BASE_URL + url,
        method: 'GET', 
        params: data,
        headers: Object.assign({},defaultHeaders, headers)
      }).then((data: AxiosResponse<AjaxResponse<T>>) => {
        resolve(data.data);
      }, reject)
    }) as Promise<AjaxResponse<T>>;
  },
  post: async <T>(url: string, data: any, headers?: AxiosRequestHeaders) => {
    await getToken(defaultHeaders)
    return new Promise((resolve, reject) => {
      axios({ 
        url: BASE_URL + url,
        method: 'POST', 
        data: data,
        headers: Object.assign({},defaultHeaders, headers)
      }).then((data: AxiosResponse<AjaxResponse<T>>) => {
        resolve(data.data);
      }, reject);
    }) as Promise<AjaxResponse<T>>;
  }
}