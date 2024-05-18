import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import Axios for making HTTP requests

const SlotSetup = ({ navigation, route }) => {
  const { slotNumber } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendSMS = async () => {
    // Check if phone number is valid
    if (!phoneNumber || phoneNumber.length !== 11) {
      Alert.alert('Error', 'Please enter a valid 11-digit phone number');
      return;
    }
  
    try {
      // Make HTTP POST request to your backend endpoint
      const response = await axios.post('https://example.com/sendSMS', {
        phoneNumber,
        message: `Your verification code for slot setup is: ${generateVerificationCode(6)}`,
      });
  
      // Handle successful response (if needed)
      console.log('SMS sent successfully:', response.data);
  
      // Navigate to AuthTab.js after sending SMS
      navigation.navigate('AuthTab', { phoneNumber }); // Optionally, pass additional data to AuthTab
    } catch (error) {
      // Handle error
      console.error('Error sending SMS:', error);
      Alert.alert('Error', 'Failed to send SMS. Please try again later.');
    }
  };

  // Function to generate a random verification code
  const generateVerificationCode = (length) => {
    const characters = '0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot {slotNumber} Setup</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendSMS}>
        <Text style={styles.buttonText}>Send SMS</Text>
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
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SlotSetup;
