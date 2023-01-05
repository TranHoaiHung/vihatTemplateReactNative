import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { FC } from 'react';
import { routeOverlayOption } from './routeOptions';
import { HomeStack } from './Stack/HomeStack';
import { AccountStack } from './Stack/AccountStack';

const RootStack = createStackNavigator();
 
export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ presentation: 'modal', ...routeOverlayOption }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
        <RootStack.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
        }}
      />

      {/* <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => <></>,
          headerLeftContainerStyle: {
            paddingLeft: customTheme.space[5],
          },
          headerRightContainerStyle: {
            paddingRight: customTheme.space[5],`
          },
          ...TransitionPresets.ModalPresentationIOS,
        }}
      /> */}
    </RootStack.Navigator>
  );
};
