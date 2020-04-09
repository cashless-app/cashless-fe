import React, {useEffect, useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import {StatusBar, View, Image, StyleSheet} from 'react-native';

const SplashScreen = props => {
  // const {resultLogin} = useSelector(state => state.auth);
  // const dispatch = useDispatch()

  useEffect(() => {
    const getLoading = async () => {
      const disLoading = '234dkfjeiwksdfj';
      if (disLoading == '234dkfjeiwksdfj') {
        setTimeout(() => {
          props.navigation.navigate('SwipeScreen');
        }, 3000);
      } else {
        props.navigation.navigate('SwipeScreen');
      }
    };
    getLoading();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/danain-text.png')}
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
