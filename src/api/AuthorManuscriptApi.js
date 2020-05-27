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

export function GetManuscriptStateID (parameter) {
  return axios({
    url: 'AuthorManuscript/GetManuscriptStateID?id=' + parameter,
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
    url: 'AuthorManuscript/UpadteManuscript',
    method: 'post',
    data: parameter
  })
}

export function CompleteMansuscriptDrafts (id) {
  return axios({
    url: 'AuthorManuscript/CompleteManuscriptID?id=' + id,
    method: 'get'
  })
}

export function GetReviewManuscript (id) {
  return axios({
    url: 'AuthorManuscript/GetReviewManuscript',
    method: 'get'
  })
}

export function GetCompleteManuscrit (id) {
  return axios({
    url: 'AuthorManuscript/GetCompleteManuscrit',
    method: 'get'
  })
}

export function GetReturnManuscript () {
  return axios({
    url: 'AuthorManuscript/GetReturnManuscript',
    method: 'get'
  })
}

export function GetReviewReturn (id) {
  return axios({
    url: 'AuthorManuscript/GetReviewReturn?id=' + id,
    method: 'get'
  })
}
