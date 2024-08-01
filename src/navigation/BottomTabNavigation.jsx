import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Scanner from '../screens/Scanner';
import Cards from '../screens/Cards';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Pressable, Text, View} from 'react-native';
import {width} from '../utils';

const CustomTabButton = ({...props}) => {
  console.log(`Custom Tab Button`, props);
  const {onPress, accessibilityState, item} = props;
  const focused = accessibilityState?.selected;
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {item == 0 ? (
        <MaterialCommunityIcon
          name="home-minus-outline"
          size={25}
          color={focused ? 'black' : '#AEAFAE'}
        />
      ) : item == 1 ? (
        <MaterialIcon
          name="qr-code-scanner"
          size={25}
          color={focused ? 'black' : '#AEAFAE'}
        />
      ) : (
        <FontAwesomeIcon
          name="credit-card"
          size={25}
          color={focused ? 'black' : '#AEAFAE'}
        />
      )}
    </Pressable>
  );
};

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: props => <CustomTabButton props={props} item={0} />,
        }}
      />
      <Tab.Screen
        name="ScannerTab"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarButton: props => <CustomTabButton props={props} item={1} />,
        }}
      />
      <Tab.Screen
        name="CardsTab"
        component={Cards}
        options={{
          headerShown: false,
          tabBarButton: props => <CustomTabButton props={props} item={2} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
