import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Scanner from '../screens/Scanner';
import Cards from '../screens/Cards';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          width: '50%',
          bottom: 30,
          left: 100,
          right: 100,
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: 15,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name="home-minus-outline"
              size={25}
              color={focused ? 'black' : '#AEAFAE'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScannerTab"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="qr-code-scanner"
              size={25}
              color={focused ? 'black' : '#AEAFAE'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CardsTab"
        component={Cards}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              name="credit-card"
              size={25}
              color={focused ? 'black' : '#AEAFAE'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
