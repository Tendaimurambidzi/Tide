import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utils/colors';
import MediaPicker from '../components/MediaPicker';

const HarbourScreen = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleEditPic = () => {
    // Use MediaPicker to select new pic
    // Placeholder
    setProfilePic('https://via.placeholder.com/100');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harbour Profile</Text>
      <TouchableOpacity onPress={handleEditPic}>
        <Image source={{ uri: profilePic || 'https://via.placeholder.com/100' }} style={styles.avatar} />
        <Text style={styles.editText}>Edit Profile Pic</Text>
      </TouchableOpacity>
      <Text style={styles.username}>Username</Text>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editText: {
    color: colors.primary,
    textAlign: 'center',
  },
  username: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: colors.accent,
    borderRadius: 25,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },
  cancelText: {
    color: 'white',
  },
});

export default HarbourScreen;