import { axios } from '@/utils/request'

export function CreateManuscript (parameter) {
  return axios({
    url: '/AuthorManuscript',
    method: 'post',
    data: parameter
  })
}

export function Uploaddata (parameter) {
  console.log('12313zhekandfiuoahfda')
  return axios({
    url: 'AuthorManuscript/uploadmain',
    method: 'post',
    data: parameter
  })
}

export function AddAthorinfo (parameter) {
  return axios({
    url: 'Manuscript/AddAuthor',
    method: 'post',
    data: parameter
  })
}

// 获取单个的草稿箱稿件信息
export function GetManuscript (parameter) {
  console.log(parameter)
  return axios({
    url: 'AuthorManuscript?id=' + parameter,
    method: 'get',
    data: parameter
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
