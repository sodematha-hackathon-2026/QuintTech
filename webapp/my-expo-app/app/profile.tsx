import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Profile() {
    return (
        <ScrollView style={styles.container}>

            {/* Profile Header */}
            <Text style={styles.heading}>👤 My Profile</Text>

            {/* Devotee Details */}
            <View style={styles.card}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>Swathi Uppoor</Text>

                <Text style={styles.label}>Mobile</Text>
                <Text style={styles.value}>+91 9XXXXXXXXX</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>devotee@email.com</Text>
            </View>

            {/* My Sevas */}
            <Text style={styles.heading}>📿 My Sevas</Text>

            <View style={styles.card}>
                <Text style={styles.value}>Annadana Seva</Text>
                <Text style={styles.subText}>Seva Date: 15 March 2026</Text>

                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => router.push("/cancel")}
                >
                    <Text style={styles.cancelText}>Request Cancellation</Text>
                </TouchableOpacity>
            </View>

            {/* Refund Policy Link */}
            <TouchableOpacity onPress={() => router.push("/refund")}>
                <Text style={styles.link}>
                    Cancellation & Refund Policy
                </Text>
            </TouchableOpacity>

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
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 12,
    },
    card: {
        backgroundColor: "#0E2A47",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    label: {
        color: "#9CA3AF",
        fontSize: 13,
    },
    value: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 8,
    },
    subText: {
        color: "#CBD5E1",
        fontSize: 13,
        marginBottom: 12,
    },
    cancelBtn: {
        backgroundColor: "#F87171",
        padding: 12,
        borderRadius: 12,
        alignItems: "center",
    },
    cancelText: {
        color: "#fff",
        fontWeight: "bold",
    },
    link: {
        color: "#60A5FA",
        textAlign: "center",
        marginVertical: 14,
        fontSize: 15,
    },
});