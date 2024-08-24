import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Publish = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>Publish</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Publish

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});