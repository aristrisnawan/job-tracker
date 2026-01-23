import CardJobComponent from "@/components/card-job"
import { FlatList, View } from "react-native"

export default function listJobsScreen() {
    const data = [
        {
            id: 1,
            company: 'Google',
            position: 'Data Analyst',
            status: 'Applied',
            source: 'LinkedIn',
            applied_date: '09 Jan'
        },
        {
            id: 2,
            company: 'Glits',
            position: 'Data Analyst',
            status: 'Applied',
            source: 'LinkedIn',
            applied_date: '09 Jan'
        },
        {
            id: 3,
            company: 'Telkom',
            position: 'Data Analyst',
            status: 'Applied',
            source: 'LinkedIn',
            applied_date: '09 Jan'
        },
        {
            id: 4,
            company: 'Telkom',
            position: 'Data Analyst',
            status: 'Applied',
            source: 'LinkedIn',
            applied_date: '09 Jan'
        },
        {
            id: 5,
            company: 'Telkom',
            position: 'Data Analyst',
            status: 'Applied',
            source: 'LinkedIn',
            applied_date: '09 Jan'
        }
    ]
    return (
        <View style={{ marginHorizontal: 16 }}>
            <FlatList
                key={2}
                data={data}
                numColumns={2}
                contentContainerStyle={{ gap: 10, paddingTop: 16 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <CardJobComponent items={item} width={'48%'} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}