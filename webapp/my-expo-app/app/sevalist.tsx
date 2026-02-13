import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SEVAS = [
    {
        title: "Annadana Seva",
        desc: "Sponsor free meals for devotees visiting the Matha.",
        icon: "🍚",
    },
    {
        title: "Archana Seva",
        desc: "Special pooja offered in your name for blessings.",
        icon: "🪔",
    },
    {
        title: "Panchamruta Abhisheka",
        desc: "Sacred abhisheka performed to the deity.",
        icon: "🥛",
    },
    {
        title: "Vastra Seva",
        desc: "Offering clothes to the deity.",
        icon: "👕",
    },
    {
        title: "Vidya Dana",
        desc: "Support education and Vedic learning.",
        icon: "📚",
    },
    {
        title: "Go Seva",
        desc: "Donate for cow protection and feeding.",
        icon: "🐄",
    },
    {
        title: "Festival Seva",
        desc: "Contribute to Utsavas and temple festivals.",
        icon: "🎉",
    },
];

export default function SevaList() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>❤️ Sevas in Sode Matha</Text>

            {SEVAS.map((seva, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.card}
                    onPress={() =>
                        router.push({
                            pathname: "/sevaform",
                            params: { seva: seva.title },
                        })
                    }
                >
                    <Text style={styles.title}>
                        {seva.icon} {seva.title}
                    </Text>
                    <Text style={styles.desc}>{seva.desc}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#061C33",
        padding: 16,
    },
    heading: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#0E2A47",
        borderRadius: 16,
        padding: 18,
        marginBottom: 16,
    },
    title: {
        color: "#4ADE80",
        fontSize: 18,
        fontWeight: "bold",
    },
    desc: {
        color: "#E5E7EB",
        marginTop: 6,
    },
});