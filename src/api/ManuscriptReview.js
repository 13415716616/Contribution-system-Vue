import { axios } from '@/utils/request'

export function GetAllManuscriptReviews () {
  return axios({
    url: 'ManuscriptReview',
    method: 'get'
  })
}

export function GetShowManuscriptReviews (parameter) {
  return axios({
    url: 'ManuscriptReview/ShowManuscriptReviews?id=' + parameter,
    method: 'get'
  })
}

export function GetFile (parameter) {
  console.log('File')
  return axios({
    url: 'Manuscript/GetFile?id=' + parameter,
    method: 'get',
    responseType: 'blob'
  })
}
