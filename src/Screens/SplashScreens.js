import React, {useEffect, useState} from 'react';
import {StatusBar, View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  useEffect(() => {
    const getLoading = async () => {
      const token = await AsyncStorage.getItem('KEY_TOKEN');
      console.log('token', token);
      if (token === null) {
        props.navigation.navigate('SwipeScreen');
      } else {
        props.navigation.navigate('Home');
      }
    };
    getLoading();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/danaku-text.png')}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#118eea',
  },
  image: {
    width: 300,
    height: 40,
  },
});

export default SplashScreen;
