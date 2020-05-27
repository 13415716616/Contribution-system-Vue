import { axios } from '@/utils/request'

export function GetAllAuthors () {
  return axios({
    url: 'Admin/GetAllAuthor',
    method: 'get'
  })
}

export function GetAllAuthorID (id) {
  return axios({
    url: 'Admin/GetAllAuthorID?id=' + id,
    method: 'get'
  })
}

export function DeleteAuthor (id) {
  return axios({
    url: 'Admin/DeleteAuthor?id=' + id,
    method: 'get'
  })
}

export function ModifAuthor (parmer) {
  return axios({
    url: 'Admin/ModifAuthor',
    method: 'post',
    data: parmer
  })
}

export function AddAuthor (parmer) {
  return axios({
    url: 'Admin/AddAuthor',
    method: 'post',
    data: parmer
  })
}

export function GetAllEditors () {
  return axios({
    url: 'Admin/GetAllEditor',
    method: 'get'
  })
}

export function AddEditor (parmer) {
  return axios({
    url: 'Admin/AddEditor',
    method: 'post',
    data: parmer
  })
}

export function DeleteEditor (id) {
  return axios({
    url: 'Admin/DeleteEditor?id=' + id,
    method: 'get'
  })
}

export function GetEditorID (id) {
  return axios({
    url: 'Admin/GetEditorID?id=' + id,
    method: 'get'
  })
}

export function GetAllExperts () {
  return axios({
    url: 'Admin/GetAllExpert',
    method: 'get'
  })
}

export function AddExpert (parmer) {
  return axios({
    url: 'Admin/AddExpert',
    method: 'post',
    data: parmer
  })
}

export function GetExpertID (id) {
  return axios({
    url: 'Admin/GetExpertID?id=' + id,
    method: 'get'
  })
}

export function DeleteExpert (id) {
  return axios({
    url: 'Admin/DeleteExpert?id=' + id,
    method: 'get'
  })
}

export function GetAllManuscript () {
  return axios({
    url: 'Admin/GetAllManuscript',
    method: 'get'
  })
}
