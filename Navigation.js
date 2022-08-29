import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Home from './screens/Home/Home';
import Blog from './screens/Blog';
import CreateBlog from './screens/CreateBlog';
import configureStore from './store';
import AddEdit from './screens/AddEdit/AddEdit';

const store = configureStore();

export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions} >
              <Stack.Screen  name='Home' component={Home} />
              <Stack.Screen  name='Blog' component={Blog} />
              <Stack.Screen  name='CreateBlog' component={CreateBlog} />
              <Stack.Screen  name='AddEdit' component={AddEdit} />
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}