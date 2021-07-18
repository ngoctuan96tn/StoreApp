import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './HomeScreen';
import { NotifyScreen } from './NotifyScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotifyScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="earth" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}