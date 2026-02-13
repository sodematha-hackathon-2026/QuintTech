import { View, Text, StyleSheet } from "react-native";

const MOCK_DATA = [
    { mobile: "9876543210", name: "Devotee A", score: 2 },
    { mobile: "9123456789", name: "Devotee B", score: 1 },
];

export default function Leaderboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏆 Leaderboard</Text>

            {MOCK_DATA.map((u, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.name}>{u.name}</Text>
                    <Text style={styles.score}>
                        Score: {u.score} ⭐ {u.score === 2 ? "Gold" : "Silver"}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F1A",
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: "#FFD700",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#1E2433",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    score: {
        color: "#ccc",
        marginTop: 5,
    },
});