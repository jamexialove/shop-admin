import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// request  不支持泛型
// request.get、post、put支持响应数据泛型

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如 token 过期无效、服务器异常等
  if (response.data.statu && response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any> (config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data || res.data.data) as T
  })
}
