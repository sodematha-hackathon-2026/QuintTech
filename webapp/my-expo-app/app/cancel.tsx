import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function CancelSeva() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Request Seva Cancellation</Text>

            <TextInput
                placeholder="Seva Booking ID"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
            />

            <TextInput
                placeholder="Reason for Cancellation"
                placeholderTextColor="#9CA3AF"
                style={[styles.input, { height: 100 }]}
                multiline
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit Request</Text>
            </TouchableOpacity>

            <Text style={styles.note}>
                ⚠️ Cancellation is allowed only before the seva date.
                Refunds are subject to verification and temple approval.
            </Text>
        </View>
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
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#0E2A47",
        color: "#fff",
        padding: 14,
        borderRadius: 12,
        marginBottom: 14,
    },
    button: {
        backgroundColor: "#4ADE80",
        padding: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#022C22",
    },
    note: {
        color: "#FACC15",
        marginTop: 20,
        fontSize: 13,
        lineHeight: 18,
    },
});