import { axios } from '@/utils/request'

export function GetAllWaitManuscript () {
  return axios({
    url: 'EditorManscript',
    method: 'get'
  })
}

export function EditShowManusript (parmer) {
  return axios({
    url: 'EditorManscript/Show?id=' + parmer,
    method: 'get'
  })
}

export function SentComment (commentinfo) {
  return axios({
    url: 'EditorManscript/SentComment',
    data: commentinfo,
    method: 'post'
  })
}

export function GetfirstComments (parmer) {
  console.log('this')
  return axios({
    url: 'EditorManscript/GetManuscriptComment?id=' + parmer,
    method: 'get'
  })
}

export function CompleteManuscript (id) {
  return axios({
    url: 'EditorManscript/Complete?id=' + id,
    method: 'get'
  })
}

export function GetEdiotrManuscript () {
  return axios({
    url: 'EditorManscript/GetEdiotrManuscript',
    method: 'get'
  })
}

export function CompleteDratfs () {
  return axios({
    url: 'Manuscript/CompleteDratfs',
    method: 'get'
  })
}

export function GetManuscript (parameter) {
  return axios({
    url: 'AuthorManuscript/GetManuscript?id=' + parameter,
    method: 'get'
  })
}

export function CompleteFirstContribution (info) {
  return axios({
    url: 'EditorManscript/CompleteFirstContribution',
    data: info,
    method: 'post'
  })
}

export function GetSecondEdiotrManuscript () {
  return axios({
    url: 'EditorManscript/GetSecondEdiotrManuscript',
    method: 'get'
  })
}

export function CompleteSecondEdiotrManuscript (id) {
  return axios({
    url: 'EditorManscript/CompleteSecondEdiotrManuscript?id=' + id,
    method: 'get'
  })
}

export function GetManuscriptAuthor (id) {
  return axios({
    url: 'EditorManscript/GetManuscriptAuthor?id=' + id,
    method: 'get'
  })
}

export function GetEndManuscript () {
  return axios({
    url: 'EditorManscript/GetEndManuscript',
    method: 'get'
  })
}

export function ReviewFirstManuscript (id) {
  return axios({
    url: 'EditorManscript/ReviewFirstManuscript?id=' + id,
    method: 'get'
  })
}
