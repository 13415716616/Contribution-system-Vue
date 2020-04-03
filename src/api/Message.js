import { axios } from '@/utils/request'

export function ReadMessage (parmer) {
  return axios({
    url: 'Message/GetMessageInfo?id=' + parmer,
    method: 'get'
  })
}
