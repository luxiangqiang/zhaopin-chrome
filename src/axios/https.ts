import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { BASE_URL, DINGDING_URL } from './base';
import { getLocalstoryToken } from '@/utils/index';
import { ElNotification } from 'element-plus'

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
interface IMonitorMessage {
  errcode: number; 
  errmsg: string 
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
  header.token = token as string;
}
// 错误处理
const ErrorHandler = <T>(data: AjaxResponse<T>) => {
  const { success, message } = data;
  if(!success){
    ElNotification({
      title: '错误',
      message: message,
      type: 'error',
    })
    return;
  }
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
        ErrorHandler<T>(data.data)
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
        ErrorHandler<T>(data.data)
        resolve(data.data);
      }, reject);
    }) as Promise<AjaxResponse<T>>;
  },
  monitor: async (data: any) => {
    return new Promise((resolve, reject) => {
      axios({ 
        url: DINGDING_URL,
        method: 'POST', 
        data: data
      }).then(( data: AxiosResponse<{ data: IMonitorMessage }>) => {
        resolve(data);
      }, reject);
    })
  }
}