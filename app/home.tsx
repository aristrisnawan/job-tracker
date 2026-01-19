import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
        <TextInput placeholder="Search" style={{ flex: 1 }} />
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
