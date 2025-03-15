import { Text, StyleSheet, View, TouchableOpacity, Image, onPress } from 'react-native';
import Emoji from 'react-native-emoji';

function WelcomeScreen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Subtract.png')} style={styles.subtract} />
      <Image source={require('../assets/phoneintro2.png')} style={styles.image} />
      <View style={styles.imageContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Track Your Progress and Stay Motivated</Text>
        <Text style={styles.textP}>
          Track your fasting progress, water intake, weight, and mood with our inituitive trackers.
          Gain valuable insights into your habits!
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <Image
          source={require('../assets/layout-horizontal-2.png')}
          style={styles.horizontalLine}
        />
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.skipBtn}>
            <Text>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome3')}
            style={styles.continueBtn}
          >
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE3756',
    zIndex: 1,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    position: 'absolute',
    top: 20,
    width: 530,
    height: 530,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: '#FFF',
    flex: 3,
    zIndex: 2,
    position: 'absolute',
    bottom: 200,
    borderTopLeftRadius: -50,
    borderTopRightRadius: -50,
    width: '90%',
    height: 200,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
    zIndex: 3,
    lineHeight: 30,
  },
  textP: {
    fontSize: 16,
    zIndex: 3,
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 24,
  },
  subtract: {
    zIndex: 2,
    position: 'absolute',
    bottom: -10,
  },
  horizontalLine: {
    zIndex: 5,
    position: 'absolulte',
    bottom: 40,
    backgroundColor: '#FFF',
  },
  footerContainer: {
    flex: 5,
    justifyContent: 'flex-end',
    alignContent: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  footerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginBottom: 20,
  },
  continueBtn: {
    backgroundColor: '#FE3756',
    height: 50,
    width: 120,
    borderRadius: 50,
    zIndex: 5,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtn: {
    backgroundColor: '#FE3756',
    height: 50,
    width: 120,
    borderRadius: 50,
    zIndex: 5,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen3;
