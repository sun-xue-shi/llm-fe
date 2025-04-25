import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class Request {
  instance: AxiosInstance

  baseConfig: AxiosRequestConfig = { baseURL: 'http://localhost:5000/', timeout: 5000 }

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
        return Promise.reject(err)
      },
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      async (error: any) => {},
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config)
  }

  public post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.post(url, data, config)
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
