import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Favorites = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>Favorites</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});