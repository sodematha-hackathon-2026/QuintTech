import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/temple-bg.jpg")} // 👉 add temple image in assets
      style={styles.background}
      resizeMode="cover"
    >
      {/* Gradient Overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <ScrollView contentContainerStyle={styles.container}>

          {/* Top Gurus + Logo */}
          <View style={styles.headerRow}>
            <Image
              source={require("../../assets/images/Guru1.png")}
              style={styles.guru}
            />

            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.logo}
            />

            <Image
              source={require("../../assets/images/Guru2.png")}
              style={styles.guru}
            />
          </View>

          {/* Title */}
          <Text style={styles.title}>Sode Sri Vadiraja Matha</Text>
          <Text style={styles.subtitle}>Welcome Devotee 🙏</Text>

          {/* Darshan Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🕉 Darshan Timings</Text>
            <Text style={styles.cardText}>Morning : 5:30 AM – 1:00 PM</Text>
            <Text style={styles.cardText}>Evening : 5:00 PM – 8:30 PM</Text>
          </View>

          {/* Explore Section */}
          <Text style={styles.sectionTitle}>Explore More</Text>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/history")}>
              <Text style={styles.buttonText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/gallery")}>
              <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/artefacts")}>
              <Text style={styles.buttonText}>Artefacts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/booking")}>
              <Text style={styles.buttonText}>Room Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridBtn}
              onPress={() => router.push("/branches")}
            >
              <Text style={styles.gridText}>Branch Dictionary</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/sevalist")}>
              <Text style={styles.buttonText}>Seva List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridBtn}
              onPress={() => router.push("/quiz")}
            >
              <Text style={styles.gridText}>🧠 Youth Quiz</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  guru: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  gridBtn: {
    width: "48%",
    backgroundColor: "lightgreen", // glass effect
    paddingVertical: 18,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  gridText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    textAlign: "center",
    paddingBottom: 35,
  },
  subtitle: {
    fontSize: 20,
    color: "#ffd700",
    marginBottom: 20,
    paddingBottom: 35,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 50,

  },
  cardTitle: {
    color: "#00ff99",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,


  },
  cardText: {
    color: "black",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 15,
    paddingBottom: 25,
  },

  button: {
    width: "48%",
    backgroundColor: "lightgreen",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
});