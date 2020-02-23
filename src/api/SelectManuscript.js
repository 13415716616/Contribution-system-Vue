import { axios } from '@/utils/request'

export function GetSecondSelectManuscript () {
  return axios({
    url: 'ChiefEditor/GetSecondManuscript',
    method: 'get'
  })
}

export function AdoptionManuscript (parmer) {
  return axios({
    url: 'ChiefEditor/CompleteManuscript?id=' + parmer,
    method: 'get'
  })
}

export function GetCompleteManuscrit (parmer) {
  return axios({
    url: 'Manuscript/GetCompleteManuscrit?id=' + parmer,
    method: 'get'
  })
}
