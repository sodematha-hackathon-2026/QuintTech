import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ArtefactsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📚 Artefacts & Publications</Text>

            <Text style={styles.desc}>
                Sode Sri Vadiraja Matha preserves many spiritual publications,
                pravachanas and sacred reference materials for devotees.
            </Text>

            {/* Section 1 */}
            <Text style={styles.subtitle}>📖 Spiritual Books</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Sri Vadiraja Teertha Works</Text>
                <Text style={styles.cardText}>
                    Includes devotional compositions, stotras and philosophical works.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Dwaita Philosophy Texts</Text>
                <Text style={styles.cardText}>
                    Books explaining Madhwacharya philosophy and traditions.
                </Text>
            </View>

            {/* Section 2 */}
            <Text style={styles.subtitle}>🎧 Pravachanas</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Audio Discourses</Text>
                <Text style={styles.cardText}>
                    Spiritual talks by Swamijis and scholars on Bhakti and Dharma.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Festival Pravachanas</Text>
                <Text style={styles.cardText}>
                    Special lectures during Aaradhana & Mahotsava celebrations.
                </Text>
            </View>

            {/* Section 3 */}
            <Text style={styles.subtitle}>📄 Reference Materials</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Temple History Documents</Text>
                <Text style={styles.cardText}>
                    Archives about Sode Matha heritage and Guru Parampara.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Devotional Resources</Text>
                <Text style={styles.cardText}>
                    Stotras, Slokas and daily prayer materials for devotees.
                </Text>
            </View>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#081b33",
        padding: 15
    },

    title: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 15
    },

    desc: {
        color: "white",
        marginBottom: 20,
        textAlign: "center"
    },

    subtitle: {
        fontSize: 20,
        color: "#2ecc71",
        marginBottom: 10,
        marginTop: 15
    },

    card: {
        backgroundColor: "#0f2b4d",
        padding: 15,
        borderRadius: 15,
        marginBottom: 12
    },

    cardTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

    cardText: {
        color: "lightgray",
        marginTop: 5
    }
});