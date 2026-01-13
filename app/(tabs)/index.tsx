import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ marginHorizontal: 16 }}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Let's Sign You In</Text>
          <Text>Welcome back, you've been missed!</Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <Text>Email Address</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput placeholder='email' style={{ borderWidth: 1, marginTop: 10, borderRadius: 6 }} />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
