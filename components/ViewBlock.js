import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';


const handleMarginsOrPaddings = (type, value) => {
  function X(type) {
    const obj = {};
    obj[`${type}Top`]    = arguments[1];
    obj[`${type}Right`]  = arguments[2];
    obj[`${type}Bottom`] = arguments[3];
    obj[`${type}Left`]   = arguments[4];
    return obj;
  }

  const size = value.length;
  switch (size) {
    case 1:
      return X(type, value[0], value[0], value[0], value[0]);
    case 2:
      return X(type, value[0], value[1], value[0], value[1]);
    case 3:
      return X(type, value[0], value[1], value[2], value[1]);
    case 4:
      return X(type, value[0], value[1], value[2], value[3]);
  }
}



export const ViewBlock = (props) => {
  const { 
    flex, row, align, justify,
    bgColor,
    margin, padding, 
    style,
    children } = props;

  const blockStyles = [
    styles.block,
    flex && {flex: flex},
    row && {flexDirection: 'row'},
    justify && {justifyContent: justify},
    align && {alignItems: align},
    bgColor && {backgroundColor: bgColor},
    margin && { ...handleMarginsOrPaddings('margin', {margin})},
    padding && { ...handleMarginsOrPaddings('padding', padding)},
    style,
  ];

  return (
    <View style={blockStyles}>
      {children}
    </View>
  );
}




const styles = StyleSheet.create({
  block: {
  },
})
