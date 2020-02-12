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
