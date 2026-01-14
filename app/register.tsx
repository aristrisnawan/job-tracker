import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
    const [passwordSeccure, setPasswordSeccure] = useState(true)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 16 }}
                >
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Getting Started</Text>
                        <Text>Seems you are new here.{'\n'}Let's up youre profile</Text>
                    </View>
                    <View style={styles.containerTextField}>
                        <Text>Name</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <TextInput placeholder='Input your name' style={styles.textField} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.containerTextField}>
                        <Text>Email Address</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <TextInput placeholder='Input your email' style={styles.textField} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.containerTextField}>
                        <Text>Password</Text>
                        <View style={styles.containerPassword}>
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
                    <View style={styles.containerTextField}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => alert('oke')}
                        >
                            <Text style={{ color: 'white' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerRedirectSignUp}>
                        <Text style={{ textAlign: 'center' }}>Already have an account?</Text>
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

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    containerTitle: {
        marginTop: 60,
        marginBottom: 30
    },
    title: {
        fontSize: 30,
        fontWeight: '600'
    },
    containerTextField: {
        marginTop: 30
    },
    textField: {
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 6
    },
    containerPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 10
    },
    button: {
        backgroundColor: '#0E21A0',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    containerRedirectSignUp: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4
    }
})