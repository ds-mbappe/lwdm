import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Link href={'/(public)/sign_in'}>
          <Text>Go to Sign in</Text>
        </Link>

        <Link replace href={'/(tabs)'}>
          <Text>Go to Home</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});