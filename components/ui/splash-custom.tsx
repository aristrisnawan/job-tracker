import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenCustom() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image
                    source={require('../../assets/images/requirements.png')}
                    style={{ width: 200, height: 200, marginBottom: 20 }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>
                    One Place to Manage Your
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>
                    Job Journey
                </Text>
            </View>
        </SafeAreaView>
    )
}