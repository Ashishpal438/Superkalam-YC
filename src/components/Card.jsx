import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {width} from '../utils';

const Card = ({
  color,
  logo,
  company,
  balance,
  accountNumber,
  currency,
  valid,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Country */}
        <View style={styles.country}>
          <Image
            style={styles.logo}
            source={{
              uri: logo,
            }}
          />
          <Text style={{fontSize: 14, color: 'black'}}>{currency}</Text>
        </View>
        <Text style={{fontSize: 24, fontWeight: 700, color: 'black'}}>
          {company}
        </Text>
      </View>

      {/* Mid Section */}
      <View>
        <Text>Your balance</Text>
        <View>
          <Text style={{fontSize: 24, fontWeight: 500, color: 'black'}}>
            {balance}
          </Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View>
          <Text style={{fontSize: 14, fontWeight: 500, color: 'white'}}>
            Account Number
          </Text>
          <Text>{accountNumber}</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: 500, color: 'white'}}>
            Valid Thru
          </Text>
          <Text>{valid}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 100,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    gap: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  country: {
    backgroundColor: '#F7F6F7',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 20,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Card;
