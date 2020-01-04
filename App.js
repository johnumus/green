import React, {useState, useEffect} from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import {StyleSheet, SafeAreaView, StatusBar, Platform} from 'react-native';

import {ViewBlock} from './components/ViewBlock';
import AppNavigator from './navigation/AppNavigator';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }


  return (
    // <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
        // translucent={true}
        // backgroundColor={'#ffffff'}
    <ViewBlock flex={1}>
      <StatusBar
        hidden={true}
        barStyle='white-content'
      />
      <AppNavigator />
    </ViewBlock>
    // </SafeAreaView>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/leaf_original.png'),
      require('./assets/images/what_leaf.png'),
      require('./assets/images/banana_leaf.png'),
      require('./assets/images/olive_branch.png'),
      require('./assets/images/murungai-leaf-powder.png'),
      require('./assets/images/powder_pack.png'),
    ]),
    Font.loadAsync({
      'inria-serif-regular': require('./assets/fonts/InriaSerif-Regular.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
    })
  ])
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
});
