import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>Account</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});