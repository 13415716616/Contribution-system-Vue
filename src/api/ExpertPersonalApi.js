import { axios } from '@/utils/request'

export function UpdateExpertInfo (parmer) {
  return axios({
    url: 'ExpertPersonal/UpdateExpertInfo',
    method: 'post',
    data: parmer
  })
}
