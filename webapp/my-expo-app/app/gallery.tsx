import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function GalleryScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📸 Sode Matha Gallery</Text>

            <Text style={styles.subtitle}>Temple & Events</Text>

            <Image source={{ uri: "https://www.sodematha.in/images/temple1.jpg" }} style={styles.img} />
            <Image source={{ uri: "https://www.sodematha.in/images/temple2.jpg" }} style={styles.img} />
            <Image source={{ uri: "https://www.sodematha.in/images/temple3.jpg" }} style={styles.img} />

            <Text style={styles.subtitle}>Festivals & Sevas</Text>

            <Image source={{ uri: "https://www.sodematha.in/images/event1.jpg" }} style={styles.img} />
            <Image source={{ uri: "https://www.sodematha.in/images/event2.jpg" }} style={styles.img} />
            <Image source={{ uri: "https://www.sodematha.in/images/event3.jpg" }} style={styles.img} />

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
        marginBottom: 20
    },

    subtitle: {
        fontSize: 20,
        color: "#2ecc71",
        marginBottom: 10,
        marginTop: 15
    },

    img: {
        width: "100%",
        height: 220,
        borderRadius: 15,
        marginBottom: 15
    }
});