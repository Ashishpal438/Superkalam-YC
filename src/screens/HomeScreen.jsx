import {View, Text} from 'react-native';
import React from 'react';
import Profile from '../components/Profile';
import CreditCard from '../components/CreditCard';
import ThemedButton from '../components/ThemedButton';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Profile />
      <CreditCard />
      <ThemedButton text={'Add New Card'} textColor={'black'} color={'#87DCFB'}/>
    </View>
  );
};

export default HomeScreen;
