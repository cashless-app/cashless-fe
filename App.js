import React from 'react';

import {Provider} from 'react-redux';
import store from './src/Redux/store';

import {View, StatusBar} from 'react-native';

import MainNavigation from './src/navigations/MainNavigation';
// import PromoDetailScreen from './src/screens/PromoDetailScreen';
// import PromoScreen from './src/screens/PromoScreen';
// import EditEmailScreen from './src/screens/SayaScreen/Setting/EditEmailScreen'

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#118eea" barStyle="light-content" />
        {/* <EditEmailScreen/> */}
        <MainNavigation />
        {/* <PromoScreen/> */}
        {/* <PromoDetailScreen/> */}
      </Provider>
    </>
  );
};

export default App;
