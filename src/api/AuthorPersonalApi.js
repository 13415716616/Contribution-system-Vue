import { axios } from '@/utils/request'

// 首页中获取数据库中稿件个数
export function GetAuthorManuscriptNum () {
  return axios({
    url: 'Personal/GetAuthorManuscriptNum',
    method: 'get'
  })
}

// 获取个人的信息
export function GetAuthorPersonalInfo () {
  return axios({
    url: 'Personal',
    method: 'get'
  })
}

// 更新个人的信息
export function UpdateAuthorPersonalInfo (parmer) {
  return axios({
    url: 'Personal/UpdateAuthorInfo',
    method: 'post',
    data: parmer
  })
}

// 更新个人的头像
export function UpdateImg (parmer) {
  return axios({
    url: 'Personal/UpdateEditorImg',
    method: 'post',
    data: parmer
  })
}

export function GetEditorPersonalInfo () {
  return axios({
    url: 'Personal/GetEditorPersonalInfo',
    method: 'get'
  })
}

export function UpdateEditorInfo (parmer) {
  return axios({
    url: 'Personal/UpdateEditorInfo',
    method: 'post',
    data: parmer
  })
}

export function UpdateEditorImg (parmer) {
  return axios({
    url: 'Personal/UpdateEditorImg',
    method: 'post',
    data: parmer
  })
}
