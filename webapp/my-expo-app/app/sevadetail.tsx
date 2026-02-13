import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SevaDetail() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const sevaData:any = {
    "Annadana Seva": {
      time: "Daily 11:30 AM – 2:30 PM",
      desc: "Sponsor free meals (Prasada) for devotees visiting the Matha.",
      payment: "UPI / Card / NetBanking / Cash at Office",
      amount: "₹2000 onwards"
    },
    "Archana Seva": {
      time: "Morning 7 AM – 12 PM",
      desc: "Special pooja performed in devotee name for blessings.",
      payment: "UPI / Card / NetBanking",
      amount: "₹300"
    },
    "Panchamruta Abhisheka": {
      time: "Morning 6:30 AM",
      desc: "Sacred abhisheka performed to the deity.",
      payment: "UPI / Card",
      amount: "₹500"
    },
    "Vastra Seva": {
      time: "Any festival day",
      desc: "Offering sacred clothes to the deity.",
      payment: "UPI / Card",
      amount: "₹1500"
    },
    "Vidya Dana": {
      time: "Year round",
      desc: "Support Vedic education & students.",
      payment: "UPI / Bank Transfer",
      amount: "₹1000 onwards"
    },
    "Go Seva": {
      time: "Daily",
      desc: "Donate for cow feeding & protection.",
      payment: "UPI / Card / NetBanking",
      amount: "₹500 onwards"
    },
    "Festival Seva": {
      time: "During Utsavas",
      desc: "Contribute to temple festivals.",
      payment: "UPI / Card",
      amount: "₹2500 onwards"
    }
  };

  const seva:any = sevaData[name as string];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>🕒 Timings</Text>
        <Text style={styles.text}>{seva.time}</Text>

        <Text style={styles.label}>📿 Description</Text>
        <Text style={styles.text}>{seva.desc}</Text>

        <Text style={styles.label}>💰 Amount</Text>
        <Text style={styles.text}>{seva.amount}</Text>

        <Text style={styles.label}>💳 Payment Modes</Text>
        <Text style={styles.text}>{seva.payment}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/seva")}
      >
        <Text style={styles.btnText}>Proceed to Donate 🙏</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:"#061A2E", padding:20 },
  title:{ color:"#fff", fontSize:26, fontWeight:"bold", marginBottom:20 },
  card:{ backgroundColor:"#0E2A47", padding:18, borderRadius:16 },
  label:{ color:"#34D399", fontSize:18, marginTop:15 },
  text:{ color:"#fff", fontSize:16, marginTop:5 },
  btn:{
    backgroundColor:"#F59E0B",
    padding:16,
    borderRadius:14,
    alignItems:"center",
    marginTop:25
  },
  btnText:{ color:"#000", fontWeight:"bold", fontSize:18 }
});