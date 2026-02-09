import ButtonComponent from "@/components/button";
import LabelComponent from "@/components/label";
import { addJobs } from "@/types/jobs";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailJob() {
  const { item } = useLocalSearchParams();
  console.log("Detail item:", item);

  interface jobDataInterface extends addJobs {
    id: string
  }

  const jobData: jobDataInterface = item ? JSON.parse(item as string) : null;

  console.log("Detail itemssss:", jobData.apply_date);

  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>
      {jobData && (
        <>
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontWeight: "600" }}>{jobData.company_name}</Text>
            <Text>Position: {jobData.position}</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text>Status</Text>
            <View style={{ marginTop: 10 }}>
              <LabelComponent text={jobData.status} color="#0E21A0" width={90} />
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
              <Text style={{ fontWeight: "600" }}>{jobData.apply_date ? new Date(jobData.apply_date).toLocaleDateString('id-ID') : "-"}</Text>
            </View>
            <View>
              <Text>Source</Text>
              <Text style={{ fontWeight: "600" }}>{jobData.source}</Text>
            </View>
            <View></View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text>Notes</Text>
            <Text style={{ fontWeight: "600", marginTop: 8 }}>
              {jobData.notes || "-"}
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
        </>
      )}
    </SafeAreaView>
  );
}
