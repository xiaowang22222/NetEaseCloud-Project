//对axios做基本配置
import store from '@/store'
import axios from 'axios'
import axiosRetry from 'axios-retry'
// axios.ceeate返回是一个新的axios的实例
const request = axios.create({
    baseURL: "http://111.229.247.11:3000/",
    timeout: 3000,
    withCredentials: true
})
axiosRetry(request, { retries: 3 })

//_axios和axios 99%功能一致
window.axios = axios
// window._axios = _axios

//axios.get("/abc") =>http://localhost:8080/abc
//基础请求地址
const cookie = store.state.auth.cookie
request.interceptors.request.use((config) => {
    // console.log(cookie);
    // config是你每次发起请求的详细配置(请求的地址,请求的路径,请求的参数)
    if (cookie) {
        ({
            get(){
                config.params || (config.params = {})
                config.params.cookie = cookie
            },
            post(){
                config.data || (config.data = {})
                config.data.cookie = cookie
            }
        })[config.method]()
    }
    return config
})
window.request = request
export default request