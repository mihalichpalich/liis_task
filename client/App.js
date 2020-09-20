import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createAppContainer} from "react-navigation";
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Provider} from 'react-redux';

import AppStackNavigator from "./AppStackNavigator";
import store from './src/redux/store';

const AppContainer = createAppContainer(AppStackNavigator);

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
                    <AppContainer/>
                </Provider>
            )
            : <AppLoading/>
    )
};

export default App;
