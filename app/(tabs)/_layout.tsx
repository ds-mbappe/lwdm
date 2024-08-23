import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="publish" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}