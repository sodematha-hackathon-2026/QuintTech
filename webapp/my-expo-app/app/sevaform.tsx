import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";



export default function SevaForm() {
    const { seva } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🛕 {seva}</Text>

            <TextInput style={styles.input} placeholder="Devotee Name" placeholderTextColor="#9CA3AF" />
            <TextInput style={styles.input} placeholder="Gotra" placeholderTextColor="#9CA3AF" />
            <TextInput style={styles.input} placeholder="Nakshatra" placeholderTextColor="#9CA3AF" />
            <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" placeholderTextColor="#9CA3AF" />
            <TextInput style={styles.input} placeholder="Amount (₹)" keyboardType="numeric" placeholderTextColor="#9CA3AF" />

            <TouchableOpacity style={styles.button} onPress={() => router.push("/refund")}>
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>




            <TouchableOpacity onPress={() => router.push("/refund")}>
                <Text style={{ color: "#60A5FA", textAlign: "center", marginTop: 12 }}>
                    View Cancellation & Refund Policy
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#061C33",
        padding: 20,
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
        backgroundColor: "#22C55E",
        padding: 16,
        borderRadius: 14,
        marginTop: 10,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
});