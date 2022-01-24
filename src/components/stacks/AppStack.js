import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import IndexScreen from '../screens/IndexScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowScreen from '../screens/ShowScreen'
import WebScreen from '../screens/WebScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={IndexScreen}
        options={{
          title: 'Recipe App',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      />
      <Stack.Screen
        name='Show'
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.label
        })}
      />
      <Stack.Screen
        name='Web'
        component={WebScreen}
        options={({ route }) => ({
          title: route.params.label,
          headerBackTitle: 'Back to Show'
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppStack
