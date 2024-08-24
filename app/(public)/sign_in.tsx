import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Button as ReactButton } from 'react-native'
import { TextInput, Text, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.topContainer}>
          <Text>{'Top Part'}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerInputs}>
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              outlineStyle={{borderRadius: '8px', borderColor: 'gray', backgroundColor: 'transparent'}}
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              secureTextEntry={true}
              outlineStyle={{borderRadius: '8px', borderColor: 'gray', backgroundColor: 'transparent'}}
              onChangeText={text => setPassword(text)}
            />

            <Text
              variant="labelLarge"
              style={{ alignSelf: 'flex-end' }}
            >
              {'Forgot your password ?'}
            </Text>

            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              // contentStyle={{height: 46}}
            >
              {'Login'}
            </Button>

            <View />

            <View style={styles.separator}>
              <Divider style={{flex: 1}} />

              <View>
                <Text variant="labelLarge">
                  {'Or continue with'}
                </Text>
              </View>

              <Divider style={{flex: 1}} />
            </View>

            <View />

            <View style={styles.social}>
              <TouchableOpacity style={styles.socialBtn}>
                <Icon name="google" size={16} />

                <Text variant="labelLarge">
                  {'Google'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Icon name="facebook" size={16} />

                <Text variant="labelLarge">
                  {'Facebook'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text variant="labelLarge">
              {"Don't have an account yet?"}
            </Text>

            <Text
              variant="titleSmall"
              style={{fontWeight: 'bold'}}
            >
              {"Register"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn

const styles = StyleSheet.create({
    scrollview: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topContainer: {
      width: '100%',
      height: '30%',
      flexDirection: 'column',
      paddingHorizontal: 20,
    },
    bottomContainer: {
      flex: 1,
      gap: 32,
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    bottomContainerInputs: {
      gap: 16,
      width: '100%',
      flexDirection: 'column',
    },
    separator: {
      gap: 8,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    social: {
      gap: 8,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    socialBtn: {
      gap: 8,
      flex: 1,
      height: 48,
      borderRadius: 12,
      borderColor: 'gray',
      borderWidth: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      gap: 4,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    }
  });