import axios from 'axios'
import lodash from 'lodash'
import { getUserInfor, deletdUserInfor } from '@/util/dealStorage'
import { Toast } from 'vant';
import { router } from '@/router'

let token;

const fetch = (options) => {
  let {
    method = 'get',
    data,
    url,
    isFile,
  } = options
  const cloneData = isFile ? data : lodash.cloneDeep(data)
  if (!token) {
    let user = getUserInfor()
    token = user.token
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
        headers: {
          token: token
        }
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData
      })
    case 'post':
      return axios({
        method: 'post',
        url,
        data: cloneData,
        headers: {
          token: token,
          'Content-Type': isFile ? "multipart/form-data" : 'application/json'
        }
      })
    case 'put':
      return axios({
        method: 'put',
        url,
        data: cloneData,
        headers: {
          token
        }
      })
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}


export default function request(options) {
  var toast1
  if (options.loading != false) {
    toast1 = Toast.loading('正在加载...');
  }
  if (options.clearToken) {
    token = ''
    delete options.clearToken
  }

  return fetch(options).then((response) => {
    const {
      statusText,
      status
    } = response
    const {
      data
    } = response
    if (data && data.code != undefined) {
      if (data.code.toString() === '0' || data.code.toString() === '110') {
        // 成功
      } else if (data.code.toString() === '10002') {
        console.log(data.message)
        // 认证失效，跳回登录页
        Toast.fail(data.message)
        return {
          success: false,
          statusCode: '403',
          message: data.message
        }
      } else if (data.code.toString() === '10005') { // 错误信息在data里面
        Toast.fail(data.message)
        return {
          success: true,
          data: data.data,
          message: data.message
        }
      } else if (data.code.toString() === '403') { // 登录异常
        router.push('login')
        token = ''
        deletdUserInfor();
        Toast.fail(data.message)
        return {
          success: false,
          data: data.data,
          message: data.message
        }
      } else {
        Toast.fail(data.message)
        return {
          success: false,
          statusCode: 500,
          message: data.message
        }
      }
    }

    toast1 && toast1.clear()
    // eslint-disable-next-line no-unreachable
    return {
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    }
  }).catch((error) => {
    const {
      response
    } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const {
        data,
        statusText
      } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    Toast.fail(msg)
    return {
      success: false,
      statusCode,
      message: msg
    }
  })
}


export function clearToken() {
  if (token) {
    token = ''
  }
}
