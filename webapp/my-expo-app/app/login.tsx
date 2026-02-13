import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

    return (
        <LinearGradient
            colors={["#071A2F", "#0E2A47", "#103B63"]}
            style={styles.container}
        >

            {/* Temple Logo */}
            <Image
                source={require("../assets/temple-bg.jpg")}
                style={styles.logo}
            />

            <Text style={styles.title}>Sode Matha</Text>
            <Text style={styles.subtitle}>Divine Services at Your Fingertips</Text>

            {/* Glass Card */}
            <View style={styles.card}>
                <Text style={styles.loginTitle}>📱 Login with Mobile</Text>

                <TextInput
                    placeholder="Enter Mobile Number"
                    placeholderTextColor="#ccc"
                    keyboardType="phone-pad"
                    style={styles.input}
                />


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/otp")}
                >
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>


                <Text style={styles.terms}>
                    By continuing you agree to{" "}
                    <Text style={{ color: "#00D09C" }}>Privacy Policy</Text> &{" "}
                    <Text style={{ color: "#00D09C" }}>Terms</Text>
                </Text>
            </View>

            <Text style={styles.footer}>🙏 Sri Vadiraja Gurubhyo Namaha 🙏</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    logo: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },

    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#bbb",
        marginBottom: 30,
    },

    card: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.08)",
        padding: 25,
        borderRadius: 25,
        backdropFilter: "blur(10px)",
    },

    loginTitle: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 15,
    },

    input: {
        backgroundColor: "rgba(255,255,255,0.12)",
        padding: 15,
        borderRadius: 12,
        color: "#fff",
        marginBottom: 20,
    },

    button: {
        backgroundColor: "#00D09C",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    terms: {
        color: "#aaa",
        fontSize: 12,
        marginTop: 15,
        textAlign: "center",
    },

    footer: {
        color: "#ccc",
        position: "absolute",
        bottom: 40,
    },
});