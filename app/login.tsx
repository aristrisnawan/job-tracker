import ButtonComponent from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import API from "@/services/api";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [passwordSeccure, setPasswordSeccure] = useState(true);
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }
    setIsLoading(true)
    try {
      const data = await API.handleLogin({ email, password });
      if (data.token) {
        await signIn(data.token)
      }
    } catch (error: any) {
      const serverMessage = error.response?.data?.error
      Alert.alert("Error", serverMessage || "Something went wrong");
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Let's Sign You In</Text>
            <Text>Welcome back, you've been missed!</Text>
          </View>
          <View style={styles.containerTextField}>
            <Text>Email Address</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Input your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={styles.textField}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerTextField}>
            <Text>Password</Text>
            <View style={styles.containerPassword}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TextInput
                  placeholder="Input your password"
                  style={{ flex: 1 }}
                  autoCapitalize="none"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={passwordSeccure ? true : false}
                />
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() => setPasswordSeccure(!passwordSeccure)}
              >
                <MaterialIcons
                  name={passwordSeccure ? "visibility-off" : "visibility"}
                  size={24}
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerTextField}>
            <ButtonComponent text="Login" onClick={handleLogin} />
          </View>
          <View style={styles.containerRedirectSignIn}>
            <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.navigate("/register")}>
              <Text style={{ fontWeight: "500", color: "#0E21A0" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  containerTitle: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  containerTextField: {
    marginTop: 30,
  },
  textField: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
  },
  containerPassword: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0E21A0",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  containerRedirectSignIn: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
  },
});
