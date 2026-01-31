import {
  ActivityIndicator,
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

interface valueButtoin {
  text: string;
  isLoading?: boolean;
  color?: string;
  onClick: () => void;
  width?: DimensionValue;
}

export default function ButtonComponent({
  text,
  color = "#0E21A0",
  isLoading,
  onClick,
  width,
}: valueButtoin) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color, width: width }]}
      onPress={onClick}
      disabled={isLoading}
    >
      {
        isLoading ? (
          <ActivityIndicator size="small" color="white"/>
        ) : <Text style={styles.textBtn}>{text}</Text>
      }
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
