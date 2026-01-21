import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        >
          {[1, 2, 3, 4, 5].map((_, index) => {
            return (
              <View key={index} style={styles.containerOverview}>
                <Text style={styles.textOverview}>Applied</Text>
                <Text>(10)</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginTop: 16 }}>
        <View style={styles.recentContainer}>
          <Text style={styles.textRecent}>Recent Jobs</Text>
          <TouchableOpacity onPress={() => alert("Oke")}>
            <Text style={styles.textViewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
        >
          {[1, 2, 3].map((_, index) => {
            return (
              <View style={styles.cardRecentJobs} key={index}>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "500" }}>Google</Text>
                    <View style={styles.containerTitle}>
                      <Text style={{ color: "white" }}>Applied</Text>
                    </View>
                  </View>
                  <Text style={{ fontWeight: "600" }}>Data Analyst</Text>
                </View>
                <Text style={{ fontSize: 12, textAlign: "center" }}>
                  Applied on 09 Jan: LinkedIn
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0E21A0",
              paddingVertical: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Add Job</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={styles.textQuote}>Keep Going</Text>
            <Text style={styles.textQuote}>
              You've applied to 10 jobs this month.
            </Text>
            <Text style={styles.textQuote}>Stay Consistent!</Text>
          </View>
        </View>
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
  containerOverview: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    minHeight: 40,
    alignItems: "center",
    padding: 8,
  },
  textOverview: {
    fontWeight: "600",
  },
  recentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textRecent: {
    fontSize: 20,
    fontWeight: "600",
  },
  textViewAll: {
    fontWeight: "500",
    color: "#0E21A0",
  },
  cardRecentJobs: {
    width: 180,
    height: 150,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  containerTitle: {
    backgroundColor: "#0E21A0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  textQuote: {
    fontSize: 18,
    fontWeight: "500",
  },
});
