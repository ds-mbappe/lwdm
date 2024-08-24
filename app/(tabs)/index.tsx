import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>Explore</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});