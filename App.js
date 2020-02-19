
// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Imports: Screens
import Counter from './screens/Counter';
import Home from './screens/Home';
// Imports: Redux Store
import { store } from './store/store';
// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}