import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {AppLoading} from 'expo';
import {Provider} from 'react-redux';
import { useFonts } from '@use-expo/font';

import AppNavigator from "./AppNavigator";
import store from './src/redux/store';

let customFonts = {
  'SF Pro Text Light': require('./assets/fonts/SFProTextLight.otf'),
  'SF Pro Text Regular': require('./assets/fonts/SFProTextRegular.otf'),
  'SF Pro Text Semibold': require('./assets/fonts/SFProTextSemibold.otf')
};

const App = () => {
  const [fontsLoaded] = useFonts(customFonts);

  return (
      !fontsLoaded
          ? <AppLoading/>
          : (
              <Provider store={store}>
                  <AppNavigator/>
              </Provider>
          )
  )
};

export default App