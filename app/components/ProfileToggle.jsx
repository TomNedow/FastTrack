import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ProfileToggle() {
  const [showProfile, setShowProfile] = useState(false);
  const handlePress = () => {
    setShowProfile(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{showProfile ? 'Hide Profile' : 'Show Profile'}</Text>
      </TouchableOpacity>

      {showProfile && (
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Jordan Mack</Text>
          <Text style={styles.profileDetails}>Age: 30</Text>
          <Text style={styles.profileDetails}>Location: Canada</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileToggle;
