import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ShopScreen } from './screens/ShopScreen';
import { NotifyScreen } from './screens/NotifyScreen';
import { NewFeedScreen } from './screens/Newfeed';
import { LibraryScreen } from './screens/Libraby';
import { MessageScreen } from './screens/Message';
import { PersonalScreen } from './screens/Personal';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Mua sắm"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Mua sắm',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
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
      <Tab.Screen
        name="Bảng tin"
        component={NewFeedScreen}
        options={{
          tabBarLabel: 'Bảng tin',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thư viện"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Thư viện',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tin nhắn"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Tin nhắn',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={PersonalScreen}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}