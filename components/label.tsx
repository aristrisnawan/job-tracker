import { DimensionValue, StyleSheet, Text, View } from "react-native";

interface valueLabel {
  color: string;
  text: string;
  width?: DimensionValue;
}
export default function LabelComponent({ color, text, width }: valueLabel) {
  return (
    <View
      style={[styles.containerTitle, { backgroundColor: color, width: width }]}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
});
