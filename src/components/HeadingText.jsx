import {Text} from 'react-native';
import React from 'react';

const HeadingText = ({text}) => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: 500,
        color: 'black',
        marginVertical: 10,
      }}>
      {text}
    </Text>
  );
};

export default HeadingText;
