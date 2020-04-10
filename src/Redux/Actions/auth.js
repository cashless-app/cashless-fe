import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const login = formdata => ({
  type: 'POST_LOGIN',
  payload: Axios.post('http://10.0.3.2:2010/api/v1/auth/login', formdata).then(
    result => {
      if (result.data.status === 200) {
        try {
          AsyncStorage.setItem('KEY_TOKEN', result.data.data.token);
          AsyncStorage.setItem('id', JSON.stringify(result.data.data.id));
          AsyncStorage.setItem('fullname', result.data.data.fullname);
        } catch (error) {
          console.log(error);
          alert('Oops something went wrong!');
        }
      }
    },
  ),
});
