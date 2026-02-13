import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HistoryScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>📜 History & Parampara</Text>

            {/* About Matha */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sode Sri Vadiraja Matha</Text>
                <Text style={styles.text}>
                    Sode Sri Vadiraja Matha is one of the Ashta Mathas of Udupi founded in
                    the Dvaita philosophy tradition of Sri Madhvacharya. The Matha is a
                    major spiritual center guiding devotees through bhakti, seva and
                    Madhwa siddhanta.
                </Text>
            </View>

            {/* Sri Madhwacharya */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Madhwacharya (1238–1317)</Text>
                <Text style={styles.text}>
                    Founder of Dvaita Vedanta philosophy. He established Udupi Krishna
                    Temple and created the Ashta Matha system for continuous worship and
                    spiritual teaching.
                </Text>
            </View>

            {/* Vishnu Tirtha */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Vishnu Tirtha</Text>
                <Text style={styles.text}>
                    Younger brother and direct disciple of Sri Madhwacharya. He became the
                    first pontiff of Sode Matha and spread Madhwa philosophy widely.
                </Text>
            </View>

            {/* Vadiraja Tirtha */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Vadiraja Tirtha (1480–1600)</Text>
                <Text style={styles.text}>
                    One of the greatest saints of Karnataka. He travelled across India,
                    composed devotional literature and made Sode Matha a major spiritual
                    hub. He introduced Hayagreeva worship and developed many temples.
                </Text>
            </View>

            {/* Vishwothama Tirtha */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Vishwothama Tirtha</Text>
                <Text style={styles.text}>
                    Continued the legacy of Sri Vadiraja Tirtha and strengthened spiritual
                    education, temple activities and religious services for devotees.
                </Text>
            </View>

            {/* Vishwavallabha Tirtha */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Vishwavallabha Tirtha</Text>
                <Text style={styles.text}>
                    Present Peetadhipathi of Sode Matha guiding devotees through
                    spirituality, seva and social initiatives across India.
                </Text>
            </View>

            {/* Bhootharaja */}
            <View style={styles.card}>
                <Text style={styles.heading}>Sri Bhootharaja</Text>
                <Text style={styles.text}>
                    Guardian deity (Kshetra Palaka) of Sode Matha. Devotees pray to Sri
                    Bhootharaja for protection, courage and removal of obstacles.
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
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
        textAlign: "center",
    },

    card: {
        backgroundColor: "#0f2b4d",
        padding: 18,
        borderRadius: 15,
        marginBottom: 18,
    },

    heading: {
        fontSize: 20,
        color: "#2ecc71",
        fontWeight: "bold",
        marginBottom: 8,
    },

    text: {
        fontSize: 16,
        color: "white",
        lineHeight: 24,
    },
});