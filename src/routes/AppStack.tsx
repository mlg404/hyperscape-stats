import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import FirstLogin from '../pages/FirstLogin'
import LandingOne from '../pages/LandingOne'
import LandingTwo from '../pages/LandingTwo'
import Logged    from './LoggedTabs'

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="LandingOne" component={LandingOne} />
        <Screen name="LandingTwo" component={LandingTwo} />
        <Screen name="FirstLogin" component={FirstLogin} />
        <Screen name="Logged" component={Logged} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;