import { clearToken } from '@/util/request'

const userInfor = 'USER_INFOR'
const currentAddress = 'CURRENT_ADDRESS'
const chaiTypeList = 'CHAITYPT_LIST'
const factoryInfo = 'FACTORY_INFO'
export function saveUserInfor(data) {
  let user = ''
  if (data) {
    user = JSON.stringify(data)
    localStorage.setItem(userInfor, user)
  } else {
    localStorage.setItem(userInfor, '')
  }
}

export function getUserInfor() {
  let user = localStorage.getItem(userInfor)
  if (user) {
    // console.log(user)
    return JSON.parse(user)
  } else {
    return {}
  }
}

export function deletdUserInfor() {
  clearToken()
  localStorage.setItem(userInfor, '')
}

// 当前地址管理
export function saveAddress(data) {
  let address = ''
  if (data) {
    address = JSON.stringify(data)
    localStorage.setItem(currentAddress, address)
  } else {
    localStorage.setItem(currentAddress, '')
  }
}

export function getAddress() {
  let address = localStorage.getItem(currentAddress)
  if (address) {
    return JSON.parse(address)
  } else {
    return {}
  }
}

// 拆解类型
export function saveChaiType(data) {
  let chaiType = ''
  if (data) {
    chaiType = JSON.stringify(data)
    localStorage.setItem(chaiTypeList, chaiType)
  } else {
    localStorage.setItem(chaiTypeList, '')
  }
}

export function getChaiType() {
  let chaiType = localStorage.getItem(chaiTypeList)
  if (chaiType) {
    return JSON.parse(chaiType)
  } else {
    return {}
  }
}

// 供应商信息
export function saveFactory(data) {
  let factory = ''
  if (data) {
    factory = JSON.stringify(data)
    localStorage.setItem(factoryInfo, factory)
  } else {
    localStorage.setItem(factoryInfo, '')
  }
}

export function getFactory() {
  let factory = localStorage.getItem(factoryInfo)
  if (factory) {
    return JSON.parse(factory)
  } else {
    return {}
  }
}

export function deletdFactory() {
  localStorage.setItem(factoryInfo, '')
}