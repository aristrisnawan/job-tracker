import ButtonComponent from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import { Image, Text, View } from "react-native";

export default function ProfileScreen() {
    const { signOut } = useAuth()
    return (
        <View style={{ marginHorizontal: 16 }}>
            <View style={{ alignItems: 'center', marginTop: 90 }}>
                <View style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: 'gray', overflow: 'hidden' }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={{ width: 130, height: 130, borderRadius: 100 }}
                    />
                </View>
                <Text style={{ marginTop: 10 }}>Admin</Text>
                <Text style={{ marginTop: 10 }}>admin@gmail.com</Text>
                <Text style={{ marginTop: 20 }}>Total applied: 12</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <ButtonComponent text="Logout" onClick={signOut} />
            </View>
        </View>
    )
}