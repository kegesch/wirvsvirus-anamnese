import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, dark as darktTheme } from '@eva-design/eva';
import { default as appTheme } from './src/shared/custom-theme';
import { HomeScreen } from './src/screens/home-screen';

const theme = {...darktTheme, ...appTheme};

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <HomeScreen />
    </ApplicationProvider>
  );
}


