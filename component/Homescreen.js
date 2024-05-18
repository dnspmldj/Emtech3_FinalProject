import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [slots, setSlots] = useState(Array(10).fill(false));
  const scaleValue = useState(new Animated.Value(1))[0];

  const toggleSlot = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index] = !updatedSlots[index];
    setSlots(updatedSlots);
  };

  const handleContinue = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('LockerSelection', { slots }); // Pass slots array to LockerSelection
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SecureSpot</Text>
      <TouchableOpacity
        style={[styles.button, { transform: [{ scale: scaleValue }] }]}
        onPress={handleContinue}
        activeOpacity={0.8} // Adjust the opacity to provide feedback on press
      >
        <Text style={styles.buttonText}>Click to Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
