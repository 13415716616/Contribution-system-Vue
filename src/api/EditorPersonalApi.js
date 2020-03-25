import { axios } from '@/utils/request'

// 获取个人的信息
export function GetEditorPersonalInfo () {
  return axios({
    url: 'EditorPersonal/GetEditorInfo',
    method: 'get'
  })
}
