import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { GURUS } from "../data/gurus";

export default function Parampara() {
    return (
        <FlatList
            data={GURUS}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => router.push(`/guru/${item.id}`)}
                >
                    <Image source={item.photo} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.sub}>Peetadhipathi</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1A2A44",
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        alignItems: "center"
    },
    image: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
    name: { color: "#FFD700", fontSize: 18 },
    sub: { color: "#B0C4DE" }
});