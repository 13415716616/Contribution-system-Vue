import { axios } from '@/utils/request'

export function CreateManuscript (parameter) {
  return axios({
    url: '/AuthorManuscript',
    method: 'post',
    data: parameter
  })
}

export function Uploaddata (parameter) {
  return axios({
    url: 'AuthorManuscript/uploadmain',
    method: 'post',
    data: parameter
  })
}

export function AddAthorinfo (parameter) {
  return axios({
    url: 'AuthorManuscript/AddManuscriptAuthor',
    method: 'post',
    data: parameter
  })
}

export function CompleteManuscript (parameter) {
  return axios({
    url: 'AuthorManuscript/CompleteManuscript',
    method: 'post',
    data: parameter
  })
}

// 获取栏目信息
export function GetManuscriptColoum () {
  return axios({
    url: 'AuthorManuscript/GetManuscriptColumn',
    method: 'get'
  })
}

// 获取稿件信息
export function GetManuscript (parameter) {
  return axios({
    url: 'AuthorManuscript/GetManuscript?id=' + parameter,
    method: 'get'
  })
}

// 获取所有的草稿箱稿件信息
export function GetManuscriptToDrafts () {
  return axios({
    url: '/AuthorManuscript/ManuscriptToDrafts',
    method: 'get'
  })
}

// 删除草稿箱稿件
export function DeleteMansuscriptDrafts (parameter) {
  return axios({
    url: '/AuthorManuscript/DeleteMansuscriptDrafts?id=' + parameter,
    method: 'get'
  })
}

// 更新草稿箱的稿件信息
export function UpdateMansuscriptDrafts (parameter) {
  return axios({
    url: 'AuthorManuscript/UpdateMansuscriptDrafts',
    method: 'post',
    data: parameter
  })
}