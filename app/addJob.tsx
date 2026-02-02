import ButtonComponent from "@/components/button";
import API from "@/services/api";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddJobScreen() {
  const [show, setShow] = useState(false);
  // const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    company_name: "",
    position: "",
    status: "applied",
    source: "",
    apply_date: new Date(),
    notes: "",
  })

  const handleAddJob = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onChangeCalendar = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setFormData({
        ...formData,
        apply_date: selectedDate,
      })
    }
  };

  const submitJob = async () => {
    const { company_name, position, source } = formData
    if (!company_name || !position || !source) {
      alert("Please fill in all required fields")
      return
    }
    try {
      console.log("Submitting job:", formData);
      await API.addDataJobs(formData)
      alert("Job added successfully")
      router.replace('/listJobs')
    } catch (error) {
      console.error("Error adding job:", error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ marginHorizontal: 16 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 16 }}
        >
          <View>
            <Text>Company Name</Text>
            <TouchableWithoutFeedback>
              <TextInput
                placeholder="Input company name"
                style={{ borderWidth: 1, borderRadius: 10, marginTop: 10 }}
                onChangeText={(text) => handleAddJob('company_name', text)}
              />
            </TouchableWithoutFeedback>
            <Text style={{ marginTop: 10 }}>Position</Text>
            <TouchableWithoutFeedback>
              <TextInput
                placeholder="Input position"
                style={{ borderWidth: 1, borderRadius: 10, marginTop: 10 }}
                onChangeText={(text) => handleAddJob('position', text)}
              />
            </TouchableWithoutFeedback>
            <Text style={{ marginTop: 10 }}>Status</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 10,
                marginTop: 10,
                overflow: "hidden",
              }}
            >
              <Picker
                selectedValue={formData.status}
                onValueChange={(itemValue) => handleAddJob('status', itemValue)}
                style={{ height: 55, width: "100%" }}>
                <Picker.Item label="Applied" value="applied" />
                <Picker.Item label="Interview" value="interview" />
                <Picker.Item label="Offer" value="offer" />
                <Picker.Item label="Reject" value="reject" />
              </Picker>
            </View>
            <Text style={{ marginTop: 10 }}>Source</Text>
            <TouchableWithoutFeedback>
              <TextInput
                placeholder="Input source"
                style={{ borderWidth: 1, borderRadius: 10, marginTop: 10 }}
                onChangeText={(text) => handleAddJob('source', text)}
              />
            </TouchableWithoutFeedback>
            <Text style={{ marginTop: 10 }}>Apply Date</Text>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 10,
                padding: 8,
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>
                {formData.apply_date.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Text>
              <TouchableOpacity onPress={() => {
                if (!show) setShow(true)
              }}>
                <MaterialIcons name="calendar-month" size={24} />
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                value={formData.apply_date}
                mode="date"
                display="calendar"
                maximumDate={new Date()}
                onChange={onChangeCalendar}
              />
            )}
            <Text style={{ marginTop: 10 }}>Notes</Text>
            <TouchableWithoutFeedback>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                  minHeight: 100,
                  textAlignVertical: "top",
                }}
                multiline={true}
                placeholder="Input notes"
                onChangeText={(text) => handleAddJob('notes', text)}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{ marginTop: 16 }}>
            <ButtonComponent
              text="Save Job"
              onClick={() => submitJob()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
