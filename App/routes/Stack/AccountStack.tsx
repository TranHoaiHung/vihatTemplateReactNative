import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {AccountScreen} from "@scenes/AccountModules"
import { FC } from 'react';
import * as React from 'react';

const AccountStackComponent = createStackNavigator();

export const AccountStack: FC = () => {
  return (
    <AccountStackComponent.Navigator initialRouteName="AccountScreen">
      <AccountStackComponent.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </AccountStackComponent.Navigator>
  );
};
