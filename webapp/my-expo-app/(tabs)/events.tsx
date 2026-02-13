import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EventsScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>📅 Upcoming Events</Text>

            <View style={styles.card}>
                <Text style={styles.date}>Feb 20</Text>
                <Text style={styles.event}>Parayana Mahotsava</Text>
                <Text style={styles.desc}>7 Day Spiritual Program</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.date}>Feb 25</Text>
                <Text style={styles.event}>Annadana Seva</Text>
                <Text style={styles.desc}>Food donation & volunteering</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.date}>Mar 05</Text>
                <Text style={styles.event}>Youth Quiz Competition</Text>
                <Text style={styles.desc}>For students & devotees</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.date}>Mar 23</Text>
                <Text style={styles.event}>Sri Vadiraja Vaibhavotsava</Text>
                <Text style={styles.desc}>Grand annual celebration</Text>
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
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#0B2A45',
        padding: 18,
        borderRadius: 14,
        marginBottom: 15,
    },
    date: {
        color: '#22C55E',
        fontWeight: 'bold',
        fontSize: 16,
    },
    event: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    desc: {
        color: '#D1D5DB',
        marginTop: 5,
    },
});