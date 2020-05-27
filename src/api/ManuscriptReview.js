import { axios } from '@/utils/request'

export function GetAllManuscriptReviews () {
  return axios({
    url: 'ManuscriptReview',
    method: 'get'
  })
}

export function GetShowManuscriptReviews (parameter) {
  return axios({
    url: 'AuthorManuscript/GetManuscriptID?id=' + parameter,
    method: 'get'
  })
}

export function ReturnComplete (parameter) {
  return axios({
    url: 'Manuscript/ReturnComplete',
    data: parameter,
    method: 'post'
  })
}

export function GetFile (parameter) {
  console.log('File')
  return axios({
    url: 'AuthorManuscript/GetFile?id=' + parameter,
    method: 'get',
    responseType: 'blob'
  })
}

export function GetChiefReviewManuscript () {
  return axios({
    url: 'ChiefEditor/GetReviewManuscript',
    method: 'get'
  })
}

export function GetAllExpertFiled () {
  return axios({
    url: 'EditorManscript/GetAllExpertFiled',
    method: 'get'
  })
}

export function GetExpertFiled (id) {
  return axios({
    url: 'EditorManscript/GetExpertFiled?id=' + id,
    method: 'get'
  })
}
