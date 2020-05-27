import { axios } from '@/utils/request'

export function AddExpertFiled (parmer) {
  return axios({
    url: 'OtherAdmin/AddExpertFiled',
    data: parmer,
    method: 'post'
  })
}

export function GetExpertFiled () {
  return axios({
    url: 'OtherAdmin/GetExpertFiled',
    method: 'get'
  })
}

export function GetExpertFiledID (id) {
  return axios({
    url: 'OtherAdmin/GetExpertFiledID?id=' + id,
    method: 'get'
  })
}

export function UpdateFiled (parmer) {
  return axios({
    url: 'OtherAdmin/UpdateFiled',
    data: parmer,
    method: 'post'
  })
}

export function DeleteFiled (id) {
  return axios({
    url: 'OtherAdmin/DeleteFiled?id=' + id,
    method: 'get'
  })
}

export function AddColumn (parmer) {
  return axios({
    url: 'OtherAdmin/AddColumn',
    data: parmer,
    method: 'post'
  })
}

export function GetColumn () {
  return axios({
    url: 'OtherAdmin/GetColumn',
    method: 'get'
  })
}

export function GetColumnID (id) {
  return axios({
    url: 'OtherAdmin/GetColumnID?id=' + id,
    method: 'get'
  })
}

export function UpdateColumn (parmer) {
  return axios({
    url: 'OtherAdmin/UpdateColumn',
    data: parmer,
    method: 'post'
  })
}

export function DeleteColumn (id) {
  return axios({
    url: 'OtherAdmin/DeleteColumn?id=' + id,
    method: 'get'
  })
}
