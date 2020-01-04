import React from 'react';
import {StyleSheet,View,Text} from 'react-native';



export const Forgot = () => {
  const renderHeader = () => (
    <Text style={styles.headerHeading}>Forgot</Text>
  );

  const renderBody = () => (
    <View style={styles.bodyBlock}>
      <Text style={styles.bodyText}>Register lookalike</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerHeading: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    paddingLeft: 35,
    fontSize: 18,
  },

  // Body -------------------------------------------------
  bodyBlock: {
    paddingLeft: 35,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bodyText: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 16,
  }
});
