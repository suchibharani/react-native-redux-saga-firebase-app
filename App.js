
// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Imports: Screens
import New_quote from './screens/Newquote';
import Counter from './screens/Counter';
import Home from './screens/Home';
import Instructions from './screens/Instructions';

// Imports: Redux Store
import { store } from './store/store';

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Newquote" component={New_quote} />
    </Stack.Navigator>
  );
}

function InstructionsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instructions" component={Instructions} />
    </Stack.Navigator>
  );
}


// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Instructions" component={InstructionsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}