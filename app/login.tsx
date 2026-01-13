import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const [passwordSeccure, setPasswordSeccure] = useState(true)
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <SafeAreaView style={{ marginHorizontal: 16 }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ marginTop: 60 }}>
                        <Text style={{ fontSize: 30, fontWeight: '600' }}>Let's Sign You In</Text>
                        <Text>Welcome back, you've been missed!</Text>
                    </View>
                    <View style={{ marginTop: 60 }}>
                        <Text>Email Address</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <TextInput placeholder='Input your email' style={{ borderWidth: 1, marginTop: 10, borderRadius: 6 }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text>Password</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 6, marginTop: 10 }}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <TextInput
                                    placeholder='Input your password'
                                    style={{ flex: 1 }}
                                    autoCapitalize='none'
                                    secureTextEntry={passwordSeccure ? true : false}
                                />
                            </TouchableWithoutFeedback>
                            <TouchableOpacity onPress={() => setPasswordSeccure(!passwordSeccure)}>
                                <MaterialIcons name={passwordSeccure ? 'visibility-off' : 'visibility'} size={24} style={{ paddingRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#0E21A0', padding: 10, borderRadius: 10, alignItems: 'center' }}
                            onPress={() => alert('oke')}
                        >
                            <Text style={{ color: 'white' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 4 }}>
                        <Text style={{ textAlign: 'center' }}>Don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => alert('okeee')}
                        >
                            <Text style={{ fontWeight: '500', color: '#0E21A0' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}