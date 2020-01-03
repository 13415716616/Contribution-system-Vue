import { axios } from '@/utils/request'

export function CreateManuscript (parameter) {
  return axios({
    url: 'https://localhost:5001/api/Manuscript',
    method: 'post',
    data: parameter
  })
}

export function Uploaddata (parameter) {
  console.log('12313zhekandfiuoahfda')
  return axios({
    url: 'https://localhost:5001/api/Manuscript/uploadmain',
    method: 'post',
    data: parameter
  })
}

export function AddAthorinfo (parameter) {
  return axios({
    url: 'Manuscript/AddAuthor',
    method: 'post',
    data: parameter
  })
}

export function GetManuscript (parameter) {
  console.log(parameter)
  return axios({
    url: 'Manuscript?id=' + parameter,
    method: 'get',
    data: parameter
  })
}
