import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Emoji from "react-native-emoji";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/phoneintro.png')} style={styles.image} />
      <Image source={require('../assets/Subtract.png')} style={styles.subtract}/>
      <Image source={require('../assets/Auto Layout Horizontal.svg')} style={styles.horizontalLine}/>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Fast Track - Start Your Fasting Journey Today!</Text>
        <Text style={styles.textP}>
          Welcome to Fast Track, your all-in-one solution for intermittent fasting success. 
          Let's get started on your journey to better health and well-being!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE3756",
    zIndex: 1,
  },
  image: {
    position: "absolute",
    top: 20,
    width: 530, 
    height: 530,
    resizeMode: "contain",
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: "#FFF",
    zIndex: 2,
    position: "absolute",
    bottom: 200,
    borderTopLeftRadius: -50, 
    borderTopRightRadius: -50,
    width: "100%",
    height: 200,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
    zIndex: 3,
  },
  textP: {
    fontSize: 16,
    zIndex: 3,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6E45E2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtract: {
    zIndex: 2,
    position: "absolute",
    bottom: -10,
  },
  horizontalLine: {
    zIndex:5,
    position: "absolulte",
    bottom: 100,
  }
});

export default WelcomeScreen;
