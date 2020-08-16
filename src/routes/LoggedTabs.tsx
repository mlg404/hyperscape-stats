import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Profile from '../pages/Profile';


const { Navigator, Screen } = createBottomTabNavigator();

const LoggedTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'ArchivoB',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#FF621A'
      }}
    
    >
      <Screen 
        options={{
          tabBarLabel: 'My Stats',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-walk" size={size} color={focused? '#FF621A':color} />
            )
          }
        }}
        name="Profile" 
        component={Profile} 
      />
      <Screen 
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={focused? '#FF621A':color} />
            )
          }
        }}
        name="Favorites" 
        component={Profile} 
      />
    </Navigator>
  );
}

export default LoggedTabs;