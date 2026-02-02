import ButtonComponent from "@/components/button";
import API from "@/services/api";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
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

export default function RegisterScreen() {
  const [passwordSeccure, setPasswordSeccure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formdData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleRegister = (name: string, value: string) => {
    setFormData(prevSatate => ({
      ...prevSatate,
      [name]: value
    }))
  }

  const handleSubmitRegister = async () => {
    const { name, email, password } = formdData
    if (!name || !email || !password) {
      alert("Please fill in all required fields")
      return
    }

    try {
      console.log("Submitting register:", formdData);
      await API.handleRegister(formdData)
      setTimeout(() => {
        setIsLoading(false)
        alert("Register successful")
        router.replace('/login')
      }, 2000);
    } catch (error) {
      console.error("Failed to register:", error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Getting Started</Text>
            <Text>Seems you are new here.{"\n"}Let's up youre profile</Text>
          </View>
          <View style={styles.containerTextField}>
            <Text>Name</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Input your name"
                style={styles.textField}
                onChangeText={(text) => handleRegister('name', text)}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerTextField}>
            <Text>Email Address</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Input your email"
                style={styles.textField}
                onChangeText={(text) => handleRegister('email', text)}
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
                  secureTextEntry={passwordSeccure ? true : false}
                  onChangeText={(text) => handleRegister('password', text)}
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
            <ButtonComponent text="Sign Up" onClick={() => handleSubmitRegister()} isLoading={isLoading}/>
          </View>
          <View style={styles.containerRedirectSignUp}>
            <Text style={{ textAlign: "center" }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.navigate("/login")}>
              <Text style={{ fontWeight: "500", color: "#0E21A0" }}>Login</Text>
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
  containerRedirectSignUp: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
  },
});
