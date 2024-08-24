import { Stack } from "expo-router/stack";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="(private)" /> */}
      </Stack>
    </PaperProvider>
  );
}
