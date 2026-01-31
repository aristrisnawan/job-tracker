import CardJobComponent from "@/components/card-job"
import API from "@/services/api"
import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"

export default function listJobsScreen() {
    interface jobsInterface {
        id: string,
        user_id: string,
        company_name: string,
        position: string,
        status: string,
        source: string,
        apply_date: string,
        notes: string,
    }

    const [jobs, setJobs] = useState<jobsInterface[]>([])

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const data = await API.getListJob()
                setJobs(data)
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        }
        dataFetch()
    },[])

    return (
        <View style={{ marginHorizontal: 16 }}>
            <FlatList
                key={2}
                data={jobs}
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