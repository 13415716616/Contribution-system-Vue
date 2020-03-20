import { axios } from '@/utils/request'

export function GetReviewManuscript () {
  return axios({
    url: 'ExpertManuscript/GetReviewManuscript',
    method: 'get'
  })
}

export function GetReviewManuscriptID (id) {
  return axios({
    url: 'ExpertManuscript/GetReviewManuscriptID?id=' + id,
    method: 'get'
  })
}

export function ReviewManuscript (parmer) {
  return axios({
    url: 'ExpertManuscript/ReviewManuscript',
    method: 'post',
    data: parmer
  })
}

export function ShowCompleteManuscript () {
  return axios({
    url: 'ExpertManuscript/ShowCompleteManuscript',
    method: 'get'
  })
}

export function GetExpertInfo () {
  return axios({
    url: 'ExpertPersonal/GetExpertInfo',
    method: 'get'
  })
}
