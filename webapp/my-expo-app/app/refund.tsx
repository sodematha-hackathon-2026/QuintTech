import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function RefundPolicy() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Cancellation & Refund Policy</Text>

            <View style={styles.card}>
                <Text style={styles.title}>🔹 Seva Cancellation</Text>
                <Text style={styles.text}>
                    • Refunds are applicable only for sevas cancelled before the scheduled date
                    and are subject to temple administration approval.
                </Text>
                <Text style={styles.text}>
                    • Sevas are performed as per the temple calendar and rituals.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>🔹 Refund Policy</Text>
                <Text style={styles.text}>
                    • Donations and Seva amounts are <Text style={styles.bold}>non-refundable</Text>.
                </Text>
                <Text style={styles.text}>
                    • In case of duplicate payment or technical failure, refund requests
                    may be considered after verification.
                </Text>
                <Text style={styles.text}>
                    • Approved refunds will be processed within 7–10 working days.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>🔹 Contact for Support</Text>
                <Text style={styles.text}>
                    For any queries related to cancellation or refunds, please contact the
                    Sode Matha administration through official contact details.
                </Text>
            </View>
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
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#0E2A47",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        color: "#4ADE80",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    text: {
        color: "#E5E7EB",
        fontSize: 14,
        marginBottom: 6,
        lineHeight: 20,
    },
    bold: {
        fontWeight: "bold",
        color: "#FACC15",
    },
});