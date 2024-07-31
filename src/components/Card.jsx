import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {width} from '../utils';

const Card = ({color}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Country */}
        <View style={styles.country}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            }}
          />
          <Text>US Dollar</Text>
        </View>
        <Text>VISA</Text>
      </View>

      {/* Mid Section */}
      <View>
        <Text>Your balance</Text>
        <View>
          <Text>$40,500.80</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View>
          <Text>Account Number</Text>
          <Text>****9934</Text>
        </View>
        <View>
          <Text>Valid Thru</Text>
          <Text>05/28</Text>
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
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Card;
