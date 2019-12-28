import { axios } from '@/utils/request'

export function CreateManuscript (parameter) {
  return axios({
    url: 'https://localhost:5001/api/Manuscript',
    method: 'post',
    data: parameter
  })
}
