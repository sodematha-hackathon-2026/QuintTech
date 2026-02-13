import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState, useEffect, useRef } from "react";

export default function OTP() {
    const router = useRouter();


    const [timer, setTimer] = useState(30);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs: any = useRef([]);

    // Timer countdown
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    // Move to next box
    const handleChange = (text: string, index: number) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Backspace → previous box
    const handleBackspace = (index: number) => {
        if (index > 0 && otp[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <LinearGradient
            colors={["#071A2F", "#0E2A47", "#103B63"]}
            style={styles.container}
        >
            <Text style={styles.title}>🔐 Verify OTP</Text>
            <Text style={styles.subtitle}>
                Enter the 6-digit code sent to your phone
            </Text>

            {/* OTP INPUT BOXES */}
            <View style={styles.otpRow}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={styles.otpBox}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace") {
                                handleBackspace(index);
                            }
                        }}
                    />
                ))}
            </View>

            {/* VERIFY BUTTON */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/(tabs)")}
            >
                <Text style={styles.buttonText}>Verify & Continue</Text>
            </TouchableOpacity>

            {/* RESEND OTP */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ color: "#bbb" }}>Didn’t receive OTP? </Text>
                {timer > 0 ? (
                    <Text style={{ color: "#00D09C" }}>Resend in {timer}s</Text>
                ) : (
                    <TouchableOpacity onPress={() => setTimer(30)}>
                        <Text style={{ color: "#00D09C", fontWeight: "bold" }}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                )}
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

    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#bbb",
        marginBottom: 40,
    },

    otpRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 30,
    },

    otpBox: {
        width: 45,
        height: 55,
        backgroundColor: "rgba(255,255,255,0.12)",
        borderRadius: 12,
        textAlign: "center",
        fontSize: 22,
        color: "#fff",
    },

    button: {
        backgroundColor: "#00D09C",
        padding: 15,
        borderRadius: 15,
        width: "90%",
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    footer: {
        color: "#ccc",
        position: "absolute",
        bottom: 40,
    },
});