import axios from 'axios'
//import store from '../store'
//import { Notify } from 'vant'
//import { getToken } from './auth'

//const url = window.location.href.split('#')[0]
//const params = window.location.href.split('?')[1]

// let apiUrl = ''
// if (url.indexOf('btgydxxtech.top') !== -1) {
//   if (url.indexOf('www') !== -1) {
//     apiUrl = 'http://www.btgydxxtech.top/admin'
//   } else {
//     apiUrl = 'http://btgydxxtech.top/admin'
//   }
// } else {
//   if (url.indexOf('hcdc.ydxxtech.com') !== -1) {
//     apiUrl = 'http://hcdc.ydxxtech.com/api'
//   } else {
//     apiUrl = '/api'
//   }
// }

// if (apiUrl === '/api') {
//   store.dispatch('setUrl', 'http://hcdc.ydxxtech.com/api')
// } else {
//   store.dispatch('setUrl', apiUrl)
// }
// create an axios instance
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (getToken()) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['Authorization'] = 'Bearer ' + getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     store.dispatch('FedLogOut').then(() => {
    //       location.reload() // 为了重新实例化vue-router对象 避免bug
    //     })
    //   } else if (error.response.status === 500) {
    //     Notify({
    //       message: '服务器错误',
    //       duration: 3000,
    //       background: '#F56C6C'
    //     })
    //   }
    // }
    return Promise.reject(error)
  }
)

export default service
