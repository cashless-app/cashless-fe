import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';

export const login = (formdata, props) => ({
  type: 'POST_LOGIN',
  payload: Axios.post('192.168.100.199:2010/api/v1/auth/login', formdata).then(
    result => {
      if (result.data.status === 200) {
        try {
          AsyncStorage.setItem('KEY_TOKEN', result.data.data.token);
          AsyncStorage.setItem('id', JSON.stringify(result.data.data.id));
          AsyncStorage.setItem('fullname', result.data.data.fullname);
          props.navigate('Home')
        } catch (error) {
          console.log(error);
          ToastAndroid.show('Oops something went wrong!', ToastAndroid.SHORT);
        }
      }
    },
  ),
});

export const register = formdata => ({
  type: 'POST_REGISTER',
  payload: Axios.post('192.168.100.199:2010/api/v1/auth/register', formdata).then(
    result => {
      if (result.data.status === 200) {
        try {
          AsyncStorage.setItem('KEY_TOKEN', result.data.data.token)
          porps.navigate('Login')
        } catch (error) {
          console.log(error);
          alert('Oops something went wrong!')
        }
      }
    }
  )
})