import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MainPage() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFasting, setIsFasting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  function handleStartFasting() {
    const currentStartTime = new Date();
    setStartTime(currentStartTime);
    setIsFasting(true);
    setIsPaused(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);
  }

  function handleStopFasting() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setStartTime(null);
    setElapsedTime(0);
    setIsFasting(false);
    setIsPaused(false);
  }

  function handlePauseResumeFasting() {
    if (isPaused) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      // Pause timer
      clearInterval(intervalRef.current);
    }
    setIsPaused(!isPaused);
  }

  // Calculate hours, minutes, seconds
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      <View style={styles.fastingWindow}>
        <Text>
          Time since last fast: {hours}h {minutes}m {seconds}s
        </Text>

        {!isFasting ? (
          <TouchableOpacity style={styles.fastingButton} onPress={handleStartFasting}>
            <Text style={styles.fastingButtonText}>Start Fasting</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.stopFastingButton} onPress={handleStopFasting}>
              <Text>Stop Fasting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pauseButton} onPress={handlePauseResumeFasting}>
              <Text>{isPaused ? 'Resume Fasting' : 'Pause Fasting'}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE3756',
  },
  header: { padding: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  fastingWindow: { alignItems: 'center' },
  fastingButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    height: 70,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fastingButtonText: { fontSize: 20, fontFamily: 'Playfair' },
  stopFastingButton: { backgroundColor: 'red', padding: 10, margin: 5, borderRadius: 5 },
  pauseButton: { backgroundColor: 'yellow', padding: 10, margin: 5 },
});

export default MainPage;
