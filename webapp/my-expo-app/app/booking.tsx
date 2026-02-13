import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

export default function BookingScreen() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [days, setDays] = useState("");
    const [members, setMembers] = useState("");

    const submitForm = () => {
        if (!name || !phone || !date) {
            Alert.alert("Fill all required details 🙏");
            return;
        }
        Alert.alert("Booking Request Sent 📨", "Office will contact you soon.");
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>🏨 Room Booking</Text>

            <Text style={styles.info}>
                Book rooms at Sode Matha for your spiritual visit.
            </Text>

            <TextInput
                placeholder="Devotee Name"
                placeholderTextColor="gray"
                style={styles.input}
                onChangeText={setName}
            />

            <TextInput
                placeholder="Mobile Number"
                placeholderTextColor="gray"
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />

            <TextInput
                placeholder="Arrival Date (dd/mm/yyyy)"
                placeholderTextColor="gray"
                style={styles.input}
                onChangeText={setDate}
            />

            <TextInput
                placeholder="Number of Days"
                placeholderTextColor="gray"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setDays}
            />

            <TextInput
                placeholder="Number of Members"
                placeholderTextColor="gray"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setMembers}
            />

            <TouchableOpacity style={styles.btn} onPress={submitForm}>
                <Text style={styles.btnText}>Submit Booking Request</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#081b33",
        padding: 20
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 15
    },

    info: {
        color: "white",
        marginBottom: 20,
        textAlign: "center"
    },

    input: {
        backgroundColor: "#0f2b4d",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        color: "white"
    },

    btn: {
        backgroundColor: "#f39c12",
        padding: 16,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 10
    },

    btnText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold"
    }
});