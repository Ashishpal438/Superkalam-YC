import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {width} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const CreditCard = ({color, numberColor, number, name, company, expiry}) => {
  const num = number.split(' ');
  return (
    <View style={styles.container}>
      <View style={[styles.topSection, {backgroundColor: color}]}>
        <Icon name={'wifi'} size={20} color={numberColor} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: numberColor, fontWeight: 500}}>
            {num[0]}
          </Text>
          <Text style={{fontSize: 20, color: numberColor, fontWeight: 500}}>
            {num[1]}
          </Text>
          <Text style={{fontSize: 20, color: numberColor, fontWeight: 500}}>
            {num[2]}
          </Text>
          <Text style={{fontSize: 20, color: numberColor, fontWeight: 500}}>
            {num[3]}
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text>{name}</Text>
          <Text>
            Exp <Text style={{color: 'black'}}>{expiry}</Text>
          </Text>
        </View>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 700}}>
          {company}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    alignSelf: 'center',
  },
  topSection: {
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    gap: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default CreditCard;
