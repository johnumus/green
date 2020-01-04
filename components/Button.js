import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';



export const Button = (props) => {
  const {
    color,
    children,
    style,
  } = props;

  const ButtonStyles = [
    styles.defaultStyle,
    color && {color: {color}},
    style
  ];

  return (
  <TouchableOpacity style={ButtonStyles}>
    {children}
  </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  defaultStyle: {
  },
});
