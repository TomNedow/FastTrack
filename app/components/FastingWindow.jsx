import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FastingWindow = ({ hoursLeft, isFasting }) => {
  return (
    <View style={[styles.circle, isFasting ? styles.fastingActive : styles.eatingWindow]}>
      <Text style={styles.text}>
        {isFasting ? `${hoursLeft} hrs left` : "Eating Window"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
  },
  fastingActive: {
    backgroundColor: "black",
    borderColor: "yellow", 
  },
  eatingWindow: {
    backgroundColor: "gray",
    borderColor: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FastingWindow;
