import {View, Text} from 'react-native';
import React from 'react';
import Profile from '../components/Profile';
import Transaction from '../components/Transaction';
import TransactionButton from '../components/TransactionButton';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Profile />
      {/* Mid Section */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TransactionButton type={'Request'} />
        <TransactionButton type={'Transfer'} />
        <Icon name={'pluscircle'} size={50} color={'black'} />
      </View>
      {/* Transactions */}
      <View>
        {/* Heading */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Transaction</Text>
          <Text>View all</Text>
        </View>
        <Text>TODAY</Text>
        <Transaction />
      </View>
    </View>
  );
};

export default HomeScreen;
