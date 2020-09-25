import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Provider} from 'react-redux';

import AppNavigator from "./AppNavigator";
import store from './src/redux/store';

let customFonts = {
  'SF Pro Text Light': require('./assets/fonts/SFProTextLight.otf'),
  'SF Pro Text Regular': require('./assets/fonts/SFProTextRegular.otf'),
  'SF Pro Text Semibold': require('./assets/fonts/SFProTextSemibold.otf')
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFontsAsync()
  }, []);


  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true)
  };

  return (
      fontsLoaded
          ? (
              <Provider store={store}>
                  <AppNavigator/>
              </Provider>
          )
          : <AppLoading/>
  )
};

export default App