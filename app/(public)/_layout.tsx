import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign_in"
        options={{
          title:  'Sign in',
          headerTitle: 'Sign in'
        }}
      />
      {/* <Stack.Screen name="sign_up" />
      <Stack.Screen name="reset_password" /> */}
    </Stack>
  );
}