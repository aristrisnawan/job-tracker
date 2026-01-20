import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingScren() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProfile}>
        <View>
          <Text>Wed, 23 March</Text>
          <Text style={styles.textUser}>Hi, Admin</Text>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
        </View>
      </View>
      <Text>Keep tracking youre career</Text>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        <MaterialIcons name="search" size={24} />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          <TextInput placeholder="Search" style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Job Overview</Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          {[1, 2, 3, 4, 5].map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 100,
                  minHeight: 40,
                  alignItems: "center",
                  padding: 8,
                }}
              >
                <Text style={{ fontWeight: "600" }}>Applied</Text>
                <Text>(10)</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  containerProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textUser: {
    fontSize: 30,
    fontWeight: "600",
  },
  containerImage: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
