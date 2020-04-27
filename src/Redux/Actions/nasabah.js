import Axios from 'axios';
const URL_STRING = 'http:/10.0.3.2:2010/api/v1/auth/getAllNasabah';

export const getAllNasabah = () => {
  return {
    type: 'GET_ALL_NASABAH',
    payload: Axios.get(URL_STRING),
  };
};
