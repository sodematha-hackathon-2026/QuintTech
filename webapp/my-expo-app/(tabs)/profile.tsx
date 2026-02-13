import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,

} from "react-native";
import { useRouter } from "expo-router";


export default function Profile() {
    const router = useRouter();
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* PROFILE SECTION */}
            <Text style={styles.title}>👤 Devotee Profile</Text>

            <View style={styles.card}>
                <TextInput
                    placeholder="Devotee Name"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Mobile Number"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Address"
                    placeholderTextColor="#9CA3AF"
                    multiline
                    style={[styles.input, { height: 90 }]}
                />

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() =>
                        Alert.alert(
                            "Profile Saved",
                            "Your profile details have been saved successfully."
                        )
                    }
                >
                    <Text style={styles.btnText}>Save Profile</Text>
                </TouchableOpacity>
            </View>

            {/* DIVIDER */}
            <View style={styles.divider} />

            {/* CANCELLATION SECTION */}
            <View style={styles.cancelBox}>
                <Text style={styles.cancelTitle}> Seva Cancellation</Text>

                <TextInput
                    placeholder="Seva Booking ID"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Reason for Cancellation"
                    placeholderTextColor="#9CA3AF"
                    multiline
                    style={[styles.input, { height: 100 }]}
                />

                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() =>
                        Alert.alert(
                            "Cancellation Submitted",
                            "Your seva cancellation request has been sent to the temple office for review."
                        )
                    }
                >
                    <Text style={styles.btnText}>Request Cancellation</Text>
                </TouchableOpacity>

                <Text style={styles.note}>
                    Cancellation is allowed only before the seva date.
                    Refund is subject to temple administration approval.
                </Text>

            </View>
            <TouchableOpacity
                style={{ backgroundColor: "#7C3AED", padding: 14, borderRadius: 12, marginTop: 20 }}
                onPress={() => router.push("/admin/dashboard")}
            >
                <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
                    🔐 Admin Dashboard
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1E33",
        padding: 20,
    },

    title: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },

    card: {
        backgroundColor: "#132F4C",
        borderRadius: 16,
        padding: 16,
    },

    input: {
        backgroundColor: "#1E3A5F",
        color: "#FFFFFF",
        padding: 14,
        borderRadius: 12,
        marginBottom: 14,
        fontSize: 15,
    },

    saveBtn: {
        backgroundColor: "#22C55E",
        padding: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 8,
    },

    btnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    divider: {
        height: 1,
        backgroundColor: "#334155",
        marginVertical: 28,
    },

    cancelBox: {
        backgroundColor: "#2A1A1A",
        borderRadius: 16,
        padding: 16,
    },

    cancelTitle: {
        color: "#F87171",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
    },

    cancelBtn: {
        backgroundColor: "#EF4444",
        padding: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 6,
    },

    note: {
        color: "#FACC15",
        fontSize: 13,
        marginTop: 12,
        lineHeight: 18,
    },
});