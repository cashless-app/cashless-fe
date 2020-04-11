import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';

export const login = (formdata, props) => ({
  type: 'POST_LOGIN',
  payload: Axios.post('http://192.168.100.199:2010/api/v1/auth/login', formdata).then(
    result => {
      if (result.data.status === 200) {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT)
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

export const register = (formdata, props) => ({
  type: 'POST_REGISTER',
  payload: Axios.post('http://192.168.100.199:2010/api/v1/auth/register', formdata).then(
    result => {
      console.log('coba', result.data.token);

      if (result.data.status === 200) {
        ToastAndroid.show('Register Success', ToastAndroid.SHORT)
        try {
          AsyncStorage.setItem('KEY_TOKEN', result.data.token)
          props.navigate('Home')
        } catch (error) {
          console.log('test', error);
          ToastAndroid.show('Oops something went wrong!', ToastAndroid.SHORT)
        }
      }
    }
  )
})