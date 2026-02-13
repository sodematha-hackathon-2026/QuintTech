import { View, Text, StyleSheet } from "react-native";

export default function Panchanga() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📅 Tithi Nirnaya Panchanga</Text>

            <View style={styles.card}>
                <Text style={styles.text}>🗓️ Today Tithi: Ekadashi</Text>
                <Text style={styles.text}>⭐ Nakshatra: Rohini</Text>
                <Text style={styles.text}>🌙 Masa: Phalguna</Text>
                <Text style={styles.text}>🙏 Special: Fasting Day</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#071A2F", padding: 20 },
    title: { color: "#fff", fontSize: 26, fontWeight: "bold" },
    card: { backgroundColor: "#103B63", padding: 20, borderRadius: 15, marginTop: 20 },
    text: { color: "#fff", marginVertical: 5 }
});