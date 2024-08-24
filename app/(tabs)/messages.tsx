import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Messages = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>Messages</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});