import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function ContactScreen() {

    const openMap = () => {
        Linking.openURL("https://maps.google.com/?q=Sode+Vadiraja+Matha+Udupi");
    };

    const callOffice = () => {
        Linking.openURL("tel:+918000000000"); // demo number
    };

    const openWebsite = () => {
        Linking.openURL("https://www.sodematha.in");
    };

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>☎️ Contact Sode Matha</Text>

            <View style={styles.card}>
                <Text style={styles.heading}>📍 Address</Text>
                <Text style={styles.text}>Sode Sri Vadiraja Matha</Text>
                <Text style={styles.text}>Hoovinakere, Kundapura</Text>
                <Text style={styles.text}>Udupi District, Karnataka</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={openMap}>
                <Text style={styles.buttonText}>Open in Google Maps</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={callOffice}>
                <Text style={styles.buttonText}>Call Office</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openWebsite}>
                <Text style={styles.buttonText}>Visit Website</Text>
            </TouchableOpacity>

            <View style={styles.socialCard}>
                <Text style={styles.heading}>🌐 Follow Us</Text>
                <Text style={styles.text}>Instagram / Facebook / YouTube</Text>
                <Text style={styles.text}>@sodematha</Text>
            </View>

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
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#0B2A45',
        padding: 18,
        borderRadius: 14,
        marginBottom: 20,
    },
    heading: {
        color: '#22C55E',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    text: {
        color: '#D1D5DB',
        marginTop: 4,
    },
    button: {
        backgroundColor: '#F59E0B',
        padding: 16,
        borderRadius: 12,
        marginTop: 12,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    socialCard: {
        backgroundColor: '#0B2A45',
        padding: 18,
        borderRadius: 14,
        marginTop: 25,
    },
});