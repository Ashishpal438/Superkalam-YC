import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const TransactionButton = ({type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={type === 'Transfer' ? 'arrow-up-right' : 'arrow-down-left'}
        size={20}
        color={'black'}
      />
      <Text style={{fontSize: 16, color: 'black'}}>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    gap: 10,
    paddingHorizontal: 25,
  },
});

export default TransactionButton;
