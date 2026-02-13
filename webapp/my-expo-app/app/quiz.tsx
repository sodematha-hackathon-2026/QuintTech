import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
} from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

/* ---------------- QUESTIONS ---------------- */


const QUESTIONS = {
    en: [
        {
            question: "Who established Sode Sri Vadiraja Matha?",
            options: [
                "Sri Vadiraja Tirtha",
                "Sri Madhvacharya",
                "Sri Vyasa",
                "Sri Raghavendra",
            ],
            answer: 0,
        },
        {
            question: "Sode Matha belongs to which philosophy?",
            options: ["Advaita", "Dvaita", "Shaiva", "Buddhism"],
            answer: 1,
        },
        {
            question: "Sri Vadiraja Tirtha was a disciple of whom?",
            options: [
                "Sri Jayatirtha",
                "Sri Vyasaraja",
                "Sri Madhvacharya",
                "Sri Padmanabha Tirtha",
            ],
            answer: 1,
        },
        {
            question: "Which deity is worshipped in Sode Matha?",
            options: [
                "Lord Vishnu",
                "Lord Shiva",
                "Lord Ganesha",
                "Lord Brahma",
            ],
            answer: 0,
        },
        {
            question: "Sode is located in which district?",
            options: ["Udupi", "Uttara Kannada", "Dakshina Kannada", "Shivamogga"],
            answer: 1,
        },
        {
            question: "Sri Vadiraja was a famous ____?",
            options: ["Warrior", "Philosopher", "King", "Architect"],
            answer: 1,
        },
        {
            question: "Dvaita philosophy was propounded by?",
            options: [
                "Sri Madhvacharya",
                "Adi Shankaracharya",
                "Ramanujacharya",
                "Basavanna",
            ],
            answer: 0,
        },
        {
            question: "Sode Matha is also known as?",
            options: [
                "Sonde Matha",
                "Udupi Matha",
                "Kashi Matha",
                "Sringeri Matha",
            ],
            answer: 0,
        },
        {
            question: "Which language was commonly used by Sri Vadiraja?",
            options: ["Kannada", "Sanskrit", "Tamil", "Telugu"],
            answer: 1,
        },
        {
            question: "Sri Vadiraja was known for?",
            options: [
                "Poetry and Philosophy",
                "Politics",
                "Business",
                "Medicine",
            ],
            answer: 0,
        },
        {
            question: "Which era did Sri Vadiraja belong to?",
            options: [
                "15th–16th century",
                "10th century",
                "18th century",
                "20th century",
            ],
            answer: 0,
        },
        {
            question: "Dvaita philosophy emphasizes?",
            options: [
                "Difference between God and soul",
                "Oneness",
                "Atheism",
                "Nature worship",
            ],
            answer: 0,
        },
        {
            question: "Sode Matha follows which sampradaya?",
            options: [
                "Madhva Sampradaya",
                "Shaiva",
                "Smarta",
                "Jain",
            ],
            answer: 0,
        },
        {
            question: "Sri Vadiraja composed works mainly in?",
            options: ["Sanskrit", "Hindi", "Prakrit", "Urdu"],
            answer: 0,
        },
        {
            question: "Sode Matha is famous for?",
            options: [
                "Spiritual learning",
                "Trade",
                "Military",
                "Tourism only",
            ],
            answer: 0,
        },
    ],

    kn: [
        {
            question: "ಸೋಡೆ ಶ್ರೀ ವಾದಿರಾಜ ಮಠವನ್ನು ಸ್ಥಾಪಿಸಿದವರು ಯಾರು?",
            options: [
                "ಶ್ರೀ ವಾದಿರಾಜ ತೀರ್ಥರು",
                "ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರು",
                "ಶ್ರೀ ವ್ಯಾಸರು",
                "ಶ್ರೀ ರಾಘವೇಂದ್ರರು",
            ],
            answer: 0,
        },
        {
            question: "ಸೋಡೆ ಮಠವು ಯಾವ ತತ್ತ್ವವನ್ನು ಅನುಸರಿಸುತ್ತದೆ?",
            options: ["ಅದ್ವೈತ", "ದ್ವೈತ", "ಶೈವ", "ಬೌದ್ಧ"],
            answer: 1,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜ ತೀರ್ಥರು ಯಾರ ಶಿಷ್ಯರಾಗಿದ್ದರು?",
            options: [
                "ಶ್ರೀ ಜಯತೀರ್ಥರು",
                "ಶ್ರೀ ವ್ಯಾಸರಾಜರು",
                "ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರು",
                "ಶ್ರೀ ಪದ್ಮನಾಭ ತೀರ್ಥರು",
            ],
            answer: 1,
        },
        {
            question: "ಸೋಡೆ ಮಠದಲ್ಲಿ ಯಾವ ದೇವರ ಪೂಜೆ ನಡೆಯುತ್ತದೆ?",
            options: [
                "ಶ್ರೀ ವಿಷ್ಣು",
                "ಶಿವ",
                "ಗಣೇಶ",
                "ಬ್ರಹ್ಮ",
            ],
            answer: 0,
        },
        {
            question: "ಸೋಡೆ ಯಾವ ಜಿಲ್ಲೆಯಲ್ಲಿದೆ?",
            options: [
                "ಉಡುಪಿ",
                "ಉತ್ತರ ಕನ್ನಡ",
                "ದಕ್ಷಿಣ ಕನ್ನಡ",
                "ಶಿವಮೊಗ್ಗ",
            ],
            answer: 1,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜರು ಪ್ರಸಿದ್ಧರಾಗಿದ್ದದ್ದು?",
            options: [
                "ಯೋಧ",
                "ತತ್ತ್ವಜ್ಞಾನಿ",
                "ರಾಜ",
                "ಶಿಲ್ಪಿ",
            ],
            answer: 1,
        },
        {
            question: "ದ್ವೈತ ತತ್ತ್ವವನ್ನು ಪ್ರತಿಪಾದಿಸಿದವರು ಯಾರು?",
            options: [
                "ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರು",
                "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು",
                "ರಾಮಾನುಜಾಚಾರ್ಯರು",
                "ಬಸವಣ್ಣ",
            ],
            answer: 0,
        },
        {
            question: "ಸೋಡೆ ಮಠವನ್ನು ಇನ್ನೇನು ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
            options: [
                "ಸೋಂಡೆ ಮಠ",
                "ಉಡುಪಿ ಮಠ",
                "ಕಾಶಿ ಮಠ",
                "ಶೃಂಗೇರಿ ಮಠ",
            ],
            answer: 0,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜರು ಯಾವ ಭಾಷೆಯಲ್ಲಿ ಬರಹ ಬರೆದರು?",
            options: [
                "ಸಂಸ್ಕೃತ",
                "ಕನ್ನಡ",
                "ತಮಿಳು",
                "ತೆಲುಗು",
            ],
            answer: 0,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜರು ಯಾವ ವಿಷಯಕ್ಕೆ ಪ್ರಸಿದ್ಧ?",
            options: [
                "ಕಾವ್ಯ ಮತ್ತು ತತ್ತ್ವ",
                "ರಾಜಕೀಯ",
                "ವ್ಯಾಪಾರ",
                "ವೈದ್ಯಕೀಯ",
            ],
            answer: 0,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜರು ಯಾವ ಕಾಲಘಟ್ಟದವರು?",
            options: [
                "15–16ನೇ ಶತಮಾನ",
                "10ನೇ ಶತಮಾನ",
                "18ನೇ ಶತಮಾನ",
                "20ನೇ ಶತಮಾನ",
            ],
            answer: 0,
        },
        {
            question: "ದ್ವೈತ ತತ್ತ್ವವು ಏನನ್ನು ಒತ್ತಿ ಹೇಳುತ್ತದೆ?",
            options: [
                "ದೇವರು ಮತ್ತು ಜೀವಾತ್ಮರ ಭೇದ",
                "ಏಕತ್ವ",
                "ನಾಸ್ತಿಕತೆ",
                "ಪ್ರಕೃತಿ ಪೂಜೆ",
            ],
            answer: 0,
        },
        {
            question: "ಸೋಡೆ ಮಠವು ಯಾವ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸೇರಿದೆ?",
            options: [
                "ಮಾಧ್ವ ಸಂಪ್ರದಾಯ",
                "ಶೈವ",
                "ಸ್ಮಾರ್ತ",
                "ಜೈನ",
            ],
            answer: 0,
        },
        {
            question: "ಶ್ರೀ ವಾದಿರಾಜರು ಮುಖ್ಯವಾಗಿ ಯಾವ ಭಾಷೆಯಲ್ಲಿ ಕೃತಿಗಳನ್ನು ರಚಿಸಿದರು?",
            options: [
                "ಸಂಸ್ಕೃತ",
                "ಹಿಂದಿ",
                "ಪ್ರಾಕೃತ",
                "ಉರ್ದು",
            ],
            answer: 0,
        },
        {
            question: "ಸೋಡೆ ಮಠವು ಯಾವ ಕಾರಣಕ್ಕೆ ಪ್ರಸಿದ್ಧ?",
            options: [
                "ಆಧ್ಯಾತ್ಮಿಕ ಶಿಕ್ಷಣ",
                "ವ್ಯಾಪಾರ",
                "ಸೈನ್ಯ",
                "ಪರ್ಯಟನ ಮಾತ್ರ",
            ],
            answer: 0,
        },
    ],
};

export default function Quiz() {
    const [lang, setLang] = useState<"en" | "kn">("en");
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [mobile, setMobile] = useState("");
    const [consent, setConsent] = useState(false);

    const data = QUESTIONS[lang];

    const handleAnswer = (index: number) => {
        if (index === data[current].answer) {
            setScore(score + 1);
        }

        if (current + 1 < data.length) {
            setCurrent(current + 1);
        } else {
            submitQuiz();
        }
    };

    const submitQuiz = () => {
        if (mobile.length < 10) {
            Alert.alert(
                lang === "en" ? "Error" : "ದೋಷ",
                lang === "en"
                    ? "Please enter valid mobile number"
                    : "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ"
            );
            return;
        }

        Alert.alert(
            lang === "en" ? "Quiz Completed 🎉" : "ಪ್ರಶ್ನೋತ್ತರ ಪೂರ್ಣಗೊಂಡಿದೆ 🎉",
            `${lang === "en" ? "Score" : "ಅಂಕ"}: ${score}/${data.length}\n${lang === "en" ? "Consent" : "ಒಪ್ಪಿಗೆ"
            }: ${consent ? "Yes" : "No"}`,
            [
                {
                    text: lang === "en" ? "View Leaderboard" : "ಲೀಡರ್‌ಬೋರ್ಡ್ ನೋಡಿ",
                    onPress: () => router.push("/leaderboard"),
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {lang === "en" ? "🧠 Youth Quiz" : "🧠 ಯುವ ಪ್ರಶ್ನೋತ್ತರ"}
            </Text>

            {/* Language Switch */}
            <View style={styles.langRow}>
                <TouchableOpacity
                    style={[
                        styles.langBtn,
                        lang === "en" && styles.activeLang,
                    ]}
                    onPress={() => setLang("en")}
                >
                    <Text style={styles.langText}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.langBtn,
                        lang === "kn" && styles.activeLang,
                    ]}
                    onPress={() => setLang("kn")}
                >
                    <Text style={styles.langText}>ಕನ್ನಡ</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                placeholder={
                    lang === "en" ? "Enter Mobile Number" : "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ"
                }
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                style={styles.input}
                value={mobile}
                onChangeText={setMobile}
            />

            <View style={styles.checkboxRow}>
                <Checkbox value={consent} onValueChange={setConsent} />
                <Text style={styles.checkboxText}>
                    {lang === "en"
                        ? "I consent to store my data"
                        : "ನನ್ನ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸಲು ನಾನು ಒಪ್ಪುತ್ತೇನೆ"}
                </Text>
            </View>

            <Text style={styles.question}>{data[current].question}</Text>

            {data[current].options.map((opt, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.option}
                    onPress={() => handleAnswer(i)}
                >
                    <Text style={styles.optionText}>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F1A",
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: "#FFD700",
        textAlign: "center",
        marginBottom: 15,
        fontWeight: "bold",
    },
    langRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
    },
    langBtn: {
        padding: 10,
        marginHorizontal: 8,
        borderRadius: 8,
        backgroundColor: "#1E2433",
    },
    activeLang: {
        backgroundColor: "#1F3C88",
    },
    langText: {
        color: "#fff",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#1E2433",
        color: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    checkboxText: {
        color: "#ccc",
        marginLeft: 8,
        flex: 1,
    },
    question: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 15,
    },
    option: {
        backgroundColor: "#1F3C88",
        padding: 14,
        borderRadius: 10,
        marginBottom: 10,
    },
    optionText: {
        color: "#fff",
        fontSize: 16,
    },
});