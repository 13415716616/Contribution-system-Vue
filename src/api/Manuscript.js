import { axios } from '@/utils/request'

export function GetAllReturnManuscript () {
  return axios({
    url: 'Manuscript/GetAllReturnManuscript',
    method: 'get'
  })
}
