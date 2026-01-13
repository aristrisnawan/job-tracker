import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderComponent() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => alert('clicked')}>
                <MaterialIcons name='arrow-back' size={24} />
            </TouchableOpacity>
            <Text style={styles.text}>Text</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: '600'
    }
})