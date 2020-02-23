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
