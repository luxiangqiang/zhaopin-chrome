import axios, { AxiosRequestHeaders } from 'axios';
import { BASE_URL } from './base'

export const httpRequester = async (url: string, methods:string, data:any, headers?: AxiosRequestHeaders) => {
  const response = await axios({ 
    url: BASE_URL + url,
    method: methods, 
    params: data,
    headers: headers
  }); 
  return response.data;
}