import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Transaction = ({destination, amount, type, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Icon
            name={type === 'request' ? 'arrow-up-right' : 'arrow-down-left'}
            size={20}
            color={'black'}
          />
        </View>
        <View>
          <Text style={{fontSize: 16, color: 'black'}}>
            {type === 'request' ? 'Transfer to' : 'Recieved From'} {destination}
          </Text>
          <Text style={{fontSize: 12}}>04:03PM</Text>
        </View>
      </View>
      <View>
        <Text>
          <Text style={{fontSize: 16, color: 'black'}}>${amount}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50,
  },
  iconContainer: {
    backgroundColor: '#DDDDDD',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Transaction;
