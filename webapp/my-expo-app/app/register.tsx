import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>👤 Devotee Registration</Text>

            <TextInput placeholder="Full Name" placeholderTextColor="#aaa" style={styles.input} />
            <TextInput placeholder="Email" placeholderTextColor="#aaa" style={styles.input} />
            <TextInput placeholder="Mobile Number" placeholderTextColor="#aaa" style={styles.input} />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Save Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#071A2F", padding: 20 },
    title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
    input: { backgroundColor: "#103B63", padding: 15, borderRadius: 12, color: "#fff", marginBottom: 15 },
    btn: { backgroundColor: "#00D09C", padding: 15, borderRadius: 15, alignItems: "center" },
    btnText: { color: "#fff", fontWeight: "bold" }
});