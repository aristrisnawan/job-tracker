import { DimensionValue, StyleSheet, Text, View } from "react-native";

interface cardValue {
    id: number
    company: string,
    status: string,
    position: string,
    applied_date: string,
    source: string
}

interface itemData {
    items: cardValue
    width?: DimensionValue
}


export default function CardJobComponent({items,width=180}:itemData) {
    return (
        <View style={[styles.cardRecentJobs,{width: width}]}>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontWeight: "500" }}>{items.company}</Text>
                    <View style={styles.containerTitle}>
                        <Text style={{ color: "white" }}>{items.status}</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: "600" }}>{items.position}</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
                Applied on {items.applied_date}: {items.source}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardRecentJobs: {
        height: 150,
        borderWidth: 1,
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