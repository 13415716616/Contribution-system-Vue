import { axios } from '@/utils/request'

export function GetSecondSelectManuscript () {
  return axios({
    url: 'ChiefEditor/GetSecondManuscript',
    method: 'get'
  })
}
