import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileToggle from '../components/ProfileToggle';

function MainPage() {
  return (
    <ScrollView>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>You're Fasting </Text>
        <ProfileToggle />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    greetingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row", 
        height: 100,
    }, 
    greeting: {
        fontSize: 20,
        marginRight: 10, 
    },
});

export default MainPage;
