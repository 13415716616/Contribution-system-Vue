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
