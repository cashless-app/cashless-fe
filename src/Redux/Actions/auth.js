import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

export const login = (formdata, props) => ({
  type: 'POST_LOGIN',
  payload: Axios.post('http://10.0.3.2:2010/api/v1/auth/login', formdata).then(
    result => {
      if (result.data.status === 200) {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT);
        try {
          console.log('id asyncstorage', result.data.data);
          AsyncStorage.setItem('KEY_TOKEN', result.data.data.token);
          AsyncStorage.setItem('id', JSON.stringify(result.data.data.id));
          AsyncStorage.setItem('name', result.data.data.name);

          props.navigate('Home');
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
  payload: new Promise((resolve, reject) => {
    Axios.post('http://10.0.3.2:2010/api/v1/auth/register', formdata)
      .then(response => {
        props.navigate('Login');
      })
      .catch(error => {
        ToastAndroid.show('User is already exists', ToastAndroid.SHORT);
        reject(error);
      });
  }),
});
