import ButtonComponent from "@/components/button";
import LabelComponent from "@/components/label";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailJob() {
  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "600" }}>Google</Text>
        <Text>Position: Data Analyst</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text>Status</Text>
        <View style={{ marginTop: 10 }}>
          <LabelComponent text="Applied" color="#0E21A0" width={90} />
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Apply Date</Text>
          <Text style={{ fontWeight: "600" }}>29 Oct 2023</Text>
        </View>
        <View>
          <Text>Source</Text>
          <Text style={{ fontWeight: "600" }}>LinkedIn</Text>
        </View>
        <View></View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>Notes</Text>
        <Text style={{ fontWeight: "600", marginTop: 8 }}>
          Melamar via referal teman
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <ButtonComponent
          text="Edit"
          onClick={() => alert("Clicked")}
          width={"48%"}
        />
        <ButtonComponent
          text="Delete"
          onClick={() => alert("Clicked")}
          width={"48%"}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <ButtonComponent
          text="Update Status"
          onClick={() => alert("Clicked")}
        />
      </View>
    </SafeAreaView>
  );
}
