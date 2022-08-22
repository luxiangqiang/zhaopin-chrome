import axios, { AxiosRequestHeaders } from 'axios';
import { BASE_URL } from './base'
import { ElNotification } from 'element-plus'

export const httpRequester = async (url: string, methods:string, data:any, headers?: AxiosRequestHeaders) => {
  const response = await axios({ 
    url: BASE_URL + url,
    method: methods, 
    params: data,
    headers: headers
  }); 
  if(response.status !== 200){
    ElNotification.error({
      message: '服务器未知异常',
      showClose: false,
    })
    return;
  }
  return response.data;
}