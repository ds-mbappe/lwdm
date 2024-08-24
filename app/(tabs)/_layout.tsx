import React from 'react';
import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
        },
        tabBarBackground: () => (
          <BlurView
            intensity={70}
            style={{
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
          />
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          headerTitle: "Explore",
          headerShown: false,
          // tabBarActiveTintColor: '',
          // tabBarInactiveTintColor: '',
          tabBarIcon: ({ focused }) => <Icon name="magnify" size={20} />
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerTitle: "Favorites",
          headerShown: false,
          // tabBarActiveTintColor: '',
          // tabBarInactiveTintColor: '',
          tabBarIcon: ({ focused }) => <Icon name="heart-outline" size={20} />
        }}
      />

      <Tabs.Screen
        name="publish"
        options={{
          title: "Publish",
          headerTitle: "Publish",
          headerShown: false,
          // tabBarActiveTintColor: '',
          // tabBarInactiveTintColor: '',
          tabBarIcon: ({ focused }) => <Icon name="plus-circle-outline" size={20} />
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          headerTitle: "Messages",
          headerShown: false,
          // tabBarActiveTintColor: '',
          // tabBarInactiveTintColor: '',
          tabBarIcon: ({ focused }) => <Icon name="message-processing-outline" size={20} />
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerTitle: "Account",
          headerShown: false,
          // tabBarActiveTintColor: '',
          // tabBarInactiveTintColor: '',
          tabBarIcon: ({ focused }) => <Icon name="account-circle-outline" size={20} />
        }}
      />
    </Tabs>
  );
}