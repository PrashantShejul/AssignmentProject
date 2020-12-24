/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Root } from 'native-base';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { myReducer } from './src/reducer/myReducer';
import HomeScreen from './src/screens/HomeScreen';
import Cart from './src/screens/Cart';
const store = createStore(myReducer);
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store} >
        <Root>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          
          <Stack.Screen 
            name="Cart"
            component={Cart}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Root>
      </Provider>
    </>
  );
};
export default App;
