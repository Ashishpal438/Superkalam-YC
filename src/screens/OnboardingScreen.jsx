import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {width} from '../utils';
import Icon from 'react-native-vector-icons/Feather';
import Margin from '../components/Margin';
import {useNavigation} from '@react-navigation/native';
import ThemedButton from '../components/ThemedButton';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 500, color: '#000'}}>
        ProfitPilot.
      </Text>
      <View style={styles.hiddenCard}>
        <Card color={'#FFF'} />
      </View>
      <View style={{marginTop: 130}}></View>
      <View style={styles.midCard}>
        <Card color={'#C8E9CA'} />
      </View>
      <View>
        <View style={styles.request}>
          <Icon name="arrow-down-left" size={25} color={'black'} />
          <Text style={{color: 'black'}}>Request</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 45, color: '#000'}}>
          {'Your \n'}
          <Text style={{fontWeight: 700}}>{'Financial \n'}</Text>
          Navigator
        </Text>
      </View>
      <Margin />
      <Text>
        Invest in projects that make a difference. Join us in supporting
        impactful initiatives and create positive change in the world.
      </Text>
      <ThemedButton
        text={'Get Started'}
        textColor={'#fff'}
        color={'#171717'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    flex: 1,
    padding: 20,
  },
  hiddenCard: {
    position: 'absolute',
    right: '-30%',
    top: 40,
    opacity: 0.9,
    zIndex: 1000,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {width: 10, height: 10},
    opacity: 0.9,
    borderRadius: 20,
  },
  midCard: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  request: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E5F2E4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    left: '45%',
    transform: [{rotateZ: '0.4rad'}],
    flexDirection: 'row',
    gap: 10,
    opacity: 0.7,
    elevation: 1,
  },
});

export default OnboardingScreen;
