import { Message } from '@arco-design/web-vue'
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class Request {
  instance: AxiosInstance

  baseConfig: AxiosRequestConfig = { baseURL: 'http://localhost:5000/', timeout: 50000 }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem('accessToken') as string
        if (token) {
          config.headers!.Authorization = 'Bearer ' + token
        }

        return config
      },
      (err: any) => {
        Message.error(err.message)
        return Promise.reject(err)
      },
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code === 'success') {
          return res.data
        } else {
          Message.error(res.data.message)
          return Promise.reject(res.data.message)
        }
      },
      async (error: any) => {
        Message.error(error.message)
        return Promise.reject(error)
      },
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config)
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): T {
    return this.instance.post(url, data, config) as T
  }

  public put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.put(url, data, config)
  }

  public patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.patch(url, data, config)
  }

  public delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.delete(url, config)
  }
}

// 默认导出Request实例
export default new Request({})
