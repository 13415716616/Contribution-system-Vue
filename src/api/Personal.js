import { axios } from '@/utils/request'

export function GetAuthorPersonalInfo () {
  return axios({
    url: 'Personal',
    method: 'get'
  })
}

export function AddAuthorTags (parmer) {
  return axios({
    url: 'Personal/AddAuthorTags?tags=' + parmer,
    method: 'get'
  })
}

export function GetCompleteManuscript () {
  return axios({
    url: 'Personal/GetCompleteManuscript',
    method: 'get'
  })
}
