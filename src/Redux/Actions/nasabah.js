import Axios from 'axios'
const URL_STRING = 'http://192.168.100.199:2010/api/v1/auth/getAllNasabah'

export const getAllNasabah = () => {
    return {
        type: 'GET_ALL_NASABAH',
        payload: Axios.get(URL_STRING)
    }
}