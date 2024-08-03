import {View, Text} from 'react-native';
import React from 'react';
import Profile from '../components/Profile';
import CreditCard from '../components/CreditCard';
import ThemedButton from '../components/ThemedButton';
import {creditCards} from '../seed/data';

const Cards = () => {
  return (
    <View style={{flex: 1, padding: 20, gap: 20}}>
      <Profile />
      <Text style={{fontSize: 18, fontWeight: 500, color: 'black'}}>
        My Card
      </Text>
      <View style={{gap: 50}}>
        {creditCards &&
          creditCards.map((creditCard, index) => {
            return (
              <CreditCard
                key={index}
                name={creditCard.name}
                color={creditCard.color}
                company={creditCard.company}
                expiry={creditCard.expiry}
                numberColor={creditCard.numberColor}
                number={creditCard.number}
              />
            );
          })}
      </View>
      <ThemedButton
        text={'Add New Card'}
        textColor={'black'}
        color={'#87DCFB'}
      />
    </View>
  );
};

export default Cards;
