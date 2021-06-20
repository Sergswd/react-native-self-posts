import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'


const Stack = createStackNavigator()

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
          headerTitleStyle: {
            fontSize: 14
          }
        }}
      >
        <Stack.Screen 
          name='Main' 
          component={MainScreen} 
          options={{title: 'Мой блог'}}
        />
        <Stack.Screen 
          name='Post' 
          component={PostScreen}
          options={({ route }) => ({ title: 'Пост от ' + new Date(route.params.date).toLocaleDateString() })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}