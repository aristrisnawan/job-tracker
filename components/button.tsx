import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface valueButtoin {
  text: string;
  color?: string;
  onClick: () => void;
  width?: DimensionValue;
}

export default function ButtonComponent({
  text,
  color = "#0E21A0",
  onClick,
  width,
}: valueButtoin) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color, width: width }]}
      onPress={onClick}
    >
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    textAlign: "center",
  },
});
