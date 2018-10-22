import axios from 'axios' // 注意先安装哦
import config from './config.js' // 倒入默认配置
import qs from 'qs' // 序列化请求数据，视服务端的要求
import Cookies from 'js-cookie'
import { Message } from 'element-ui'

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: config.baseURL,
            headers: config.headers,
        }
        )
        // request 拦截器
        instance.interceptors.request.use(config => {
            const adminToken = Cookies.get('admin-token');
            if (adminToken) {
                config.headers['Authorization'] = adminToken
            }
            // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
            if (config.method.toLocaleLowerCase() === 'post'
                || config.method.toLocaleLowerCase() === 'put'
                || config.method.toLocaleLowerCase() === 'delete') {

                config.data = qs.stringify(config.data)
            }
            return config
        }, err => {
            Message.error({ message: '请求超时!' });
            return Promise.resolve(err);
        })

        // response 拦截器
        instance.interceptors.response.use(
            response => {
                let data;
                if (response.data == undefined) {
                    data = response.request.responseText
                } else {
                    data = response.data
                }
                return data
            },
            err => {
                if (err && err.response) {
                    switch (err.response.status) {
                        case 400:
                            err.message = '请求错误'
                            break

                        case 401:
                            err.message = '未授权，请重新登录'
                            router.push({
                                path: `/login`
                            })
                            break

                        case 403:
                            err.message = '拒绝访问'
                            break

                        case 404:
                            err.message = `请求地址出错: ${err.response.config.url}`
                            break

                        case 408:
                            err.message = '请求超时'
                            break

                        case 500:
                            err.message = '服务器内部错误'
                            break

                        case 501:
                            err.message = '服务未实现'
                            break

                        case 502:
                            err.message = '网关错误'
                            break

                        case 503:
                            err.message = '服务不可用'
                            break

                        case 504:
                            err.message = '网关超时'
                            break

                        case 505:
                            err.message = 'HTTP版本不受支持'
                            break

                        default:
                    }
                }
                Message.error({ message: err.message });
                return Promise.reject(err) // 返回接口返回的错误信息
            }
        )

        //请求处理
        instance(options)
            .then((res) => {
                resolve(res)
                return false
            })
            .catch((error) => {
                reject(error)
            })
    })
}
