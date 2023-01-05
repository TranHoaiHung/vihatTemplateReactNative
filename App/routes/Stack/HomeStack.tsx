import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {HomePageScreen} from '@scenes/HomeModules';
import { FC } from 'react';
import * as React from 'react';

const HomeStackComponent = createStackNavigator();

export const HomeStack: FC = () => {
  return (
    <HomeStackComponent.Navigator initialRouteName="Home">
      <HomeStackComponent.Screen
        name="Home"
        component={HomePageScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </HomeStackComponent.Navigator>
  );
};
