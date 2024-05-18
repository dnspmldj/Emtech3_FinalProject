import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LockerSelection = ({ route }) => {
  const { slots } = route.params;
  const navigation = useNavigation();

  const handleSlotSelection = (slotNumber) => {
    navigation.navigate('SlotSetup', { slotNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locker Selection</Text>
      <View style={styles.slotsContainer}>
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.slot, { backgroundColor: slot ? '#ff6347' : '#00ff00' }]}
            onPress={() => handleSlotSelection(index + 1)}>
            <Text style={styles.slotText}>Slot {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  slot: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  slotText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LockerSelection;
