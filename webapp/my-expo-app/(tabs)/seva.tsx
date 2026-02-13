import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function SevaScreen() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [seva, setSeva] = useState('');
    const [amount, setAmount] = useState('');

    const submitForm = () => {
        Alert.alert("Seva Booked 🙏", "Thank you for your contribution!");
        setName('');
        setPhone('');
        setSeva('');
        setAmount('');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>❤️ Book a Seva</Text>

            <TextInput
                style={styles.input}
                placeholder="Devotee Name"
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={phone}
                onChangeText={setPhone}
            />

            <TextInput
                style={styles.input}
                placeholder="Seva Name (Annadana / Pooja)"
                placeholderTextColor="#aaa"
                value={seva}
                onChangeText={setSeva}
            />

            <TextInput
                style={styles.input}
                placeholder="Amount (₹)"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Proceed to Donate 🙏</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#071A2E',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#0B2A45',
        padding: 16,
        borderRadius: 12,
        color: 'white',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#F59E0B',
        padding: 18,
        borderRadius: 12,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});