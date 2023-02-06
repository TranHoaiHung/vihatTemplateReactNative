import React, { Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './themes';
import { DeviceUtils } from './utils';
import type { ProviderProps } from './PropsTypes';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export const MobileProvider = (props: ProviderProps) => {
  const { children, i18next, theme, backgroundColor = 'green' } = props;
  if (!children) {
    return null;
  }
  return (
    <ThemeProvider initial={theme}>
      <I18nextProvider i18n={i18next}>
        <SafeAreaProvider
          style={{ backgroundColor: backgroundColor }}
          initialMetrics={initialWindowMetrics}
        >
          <StatusBar translucent backgroundColor={'transparent'} />
          <View
            style={{ flexGrow: 1 }}
            onStartShouldSetResponder={DeviceUtils.dismissKeyboard}
          >
            <Fragment>{children}</Fragment>
          </View>
        </SafeAreaProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default MobileProvider;
