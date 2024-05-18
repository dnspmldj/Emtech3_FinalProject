import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Homescreen';
import LockerSelection from './components/LockerSelection';
import SlotSetup from './components/SlotSetup';
import AuthTab from './components/AuthTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SecureSpot' }} />
        <Stack.Screen name="LockerSelection" component={LockerSelection} options={{ title: 'Locker Selection' }} />
        <Stack.Screen name="SlotSetup" component={SlotSetup} options={{ title: 'Slot Setup' }} />
        <Stack.Screen name="AuthTab" component={AuthTab} options={{ title: 'Authentication' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
