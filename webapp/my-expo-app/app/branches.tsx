import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Linking,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const branches = [
    {
        name: "Sode Sri Vadiraja Matha",
        address: "Sode Village, Udupi District, Karnataka - 574104",
        phone: "+91 8258 123456",
        map: "https://www.google.com/maps/search/?api=1&query=Sode+Sri+Vadiraja+Matha",
    },
    {
        name: "Udupi Matha Branch",
        address: "Udupi, Karnataka",
        phone: "+91 820 987654",
        map: "https://www.google.com/maps/search/?api=1&query=Udupi+Temple",
    },
    {
        name: "Bangalore Matha Branch",
        address: "Bangalore, Karnataka",
        phone: "+91 80 223344",
        map: "https://www.google.com/maps/search/?api=1&query=Bangalore+Temple",
    },
    {
        name: "Mangalore Matha Branch",
        address: "Mangalore, Karnataka",
        phone: "+91 824 556677",
        map: "https://www.google.com/maps/search/?api=1&query=Mangalore+Temple",
    },
];

export default function BranchDictionary() {
    const [search, setSearch] = useState("");
    const [listening, setListening] = useState(false);

    const simulateVoiceSearch = () => {
        setListening(true);

        const possibleResults = [
            "Bangalore",
            "Udupi",
            "Mangalore",
            "Sode",
        ];

        setTimeout(() => {
            const recognized =
                possibleResults[Math.floor(Math.random() * possibleResults.length)];

            setSearch(recognized);
            setListening(false);

            Alert.alert("Voice Search", `Recognized: ${recognized}`);
        }, 1500);
    };

    const filtered = branches.filter((b) =>
        b.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📍 Branch Dictionary</Text>

            <View style={styles.searchBox}>
                <TextInput
                    placeholder="Search branch..."
                    placeholderTextColor="#94A3B8"
                    style={styles.input}
                    value={search}
                    onChangeText={setSearch}
                />

                <TouchableOpacity onPress={simulateVoiceSearch}>
                    <Ionicons
                        name={listening ? "mic-circle" : "mic"}
                        size={28}
                        color={listening ? "#22C55E" : "#38BDF8"}
                    />
                </TouchableOpacity>
            </View>

            {filtered.map((b, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.branch}>{b.name}</Text>
                    <Text style={styles.text}>📍 {b.address}</Text>
                    <Text style={styles.text}>📞 {b.phone}</Text>

                    <TouchableOpacity
                        style={styles.mapBtn}
                        onPress={() => Linking.openURL(b.map)}
                    >
                        <Text style={styles.mapText}>Open in Google Maps</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

/* ✅ STYLES (THIS WAS MISSING) */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#E2E8F0",
        marginBottom: 16,
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E293B",
        borderRadius: 12,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    input: {
        flex: 1,
        color: "#E2E8F0",
        paddingVertical: 10,
        fontSize: 16,
    },
    card: {
        backgroundColor: "#1E293B",
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
    },
    branch: {
        fontSize: 18,
        fontWeight: "600",
        color: "#38BDF8",
        marginBottom: 6,
    },
    text: {
        color: "#CBD5E1",
        fontSize: 14,
        marginBottom: 4,
    },
    mapBtn: {
        marginTop: 10,
        backgroundColor: "#2563EB",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    mapText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
});