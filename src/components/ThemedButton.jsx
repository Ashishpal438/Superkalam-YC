import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {width} from '../utils';

const ThemedButton = ({...props}) => {
  const {text, textColor, color, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={{color: textColor, fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width - 40,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default ThemedButton;
