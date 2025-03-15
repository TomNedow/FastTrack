import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

function MainPage() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); 

  function handleStartFasting() {
    const currentStartTime = new Date(); /
    setStartTime(currentStartTime);

    // Start an interval to update elapsed time every second
    intervalRef.current = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = currentTime - currentStartTime;
      setElapsedTime(timeDifference); 
    }, 1000); 
  }

  function handleStopFasting() {
    // Stop the interval and reset the fasting state
    clearInterval(intervalRef.current);
    setStartTime(null);
    setElapsedTime(0);
  }

  // Calculate hours, minutes, seconds from elapsed time
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      {/* Fasting Window */}
      <View style={styles.fastingWindow}>
        <Text>Time since last fast: {hours}h {minutes}m {seconds}s</Text>
        <TouchableOpacity style={styles.fastingButton} onPress={handleStartFasting}>
          <Text>Start Fasting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopFastingButton} onPress={handleStopFasting}>
          <Text>Stop Fasting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ececec",
    height: "100%",
    alignItems: "center",
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  fastingWindow: {
    backgroundColor: "#fff",
    height: 200,
    width: "90%",
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  fastingButton: {
    backgroundColor: "#5cb85c",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  stopFastingButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default MainPage;
