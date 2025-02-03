import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileToggle from '../components/ProfileToggle';
import FastingWindow from '../components/FastingWindow';

function MainPage() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>You're Fasting</Text>
      </View>
      
      <View style={styles.heroContainer}>
        <FastingWindow />
      </View>

      <View style ={styles.footerContainer}>
      <ProfileToggle />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  greeting: {
    fontSize: 20,
    marginRight: 10,
  },
  heroContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default MainPage;
