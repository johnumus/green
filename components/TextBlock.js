// just copy this code from the driving repo :)
import React from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export const TextBlock = (props) => {
  const {
    fontFamily,
    fontSize,
    color,
    style,
    children
  } = props;

  const textStyles = [
    styles.textDefaultStyle,
    fontFamily && {fontFamily: fontFamily},
    fontSize && {fontSize: fontSize},
    color && {color: color},
    style
  ];

  return (
    // includeFontPadding={false}
    <Text
      style={textStyles} {...props}>
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textDefaultStyle: {
    fontSize: theme.sizes.base,
    color: theme.colors.black,
  }
})
