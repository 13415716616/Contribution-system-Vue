import { axios } from '@/utils/request'

export function GetChiefEditorManuscript () {
  return axios({
    url: 'ChiefEditor/GetChiefEditorManuscript',
    method: 'get'
  })
}

export function GetExpertReviewInfo (id) {
  return axios({
    url: 'ChiefEditor/GetExpertReviewInfo?id=' + id,
    method: 'get'
  })
}

export function CompleteChiefManuscript (parmer) {
  return axios({
    url: 'ChiefEditor/CompleteManuscript',
    method: 'post',
    data: parmer
  })
}

export function GetChiefEditorInfo () {
  return axios({
    url: 'ChiefEditorPersonal/GetChiefEditorInfo',
    method: 'get'
  })
}

export function UpdateChiefEditorInfo (parmer) {
  return axios({
    url: 'ChiefEditorPersonal/UpdateChiefEditorInfo',
    method: 'post',
    data: parmer
  })
}

export function GetCompleteManuscript () {
  return axios({
    url: 'ChiefEditor/GetCompleteManuscript',
    method: 'get'
  })
}

export function GetAllCompleteInfo () {
  return axios({
    url: 'ChiefEditor/GetAllCompleteInfo',
    method: 'get'
  })
}
