import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {width} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Icon name={'wifi'} size={20} color={'black'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
            1253
          </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
            5432
          </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
            3521
          </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
            3090
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text>Sarah Muller</Text>
          <Text>Exp 09/24</Text>
        </View>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 700}}>
          VISA
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    alignSelf: 'center',
  },
  topSection: {
    backgroundColor: '#C8E9CA',
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
