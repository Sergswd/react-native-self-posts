import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeadericon'


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
          options={{
            title: 'Мой блог',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title='Take photo'
                  iconName='ios-camera'
                  onPress={() => console.log('Press photo')}
                />
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title='Toggle Drawer'
                  iconName='ios-menu'
                  onPress={() => console.log('Press photo')}
                />
              </HeaderButtons>
            ),
          }}
        />
        <Stack.Screen 
          name='Post' 
          component={PostScreen}
          options={
            ({ route }) => (
              { 
                title: 'Пост от ' + new Date(route.params.date).toLocaleDateString(),
                headerRight: () => (
                  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item
                      title='Take photo'
                      iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                      onPress={() => console.log('Press photo')}
                    />
                  </HeaderButtons>
                )
              }
            )
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}