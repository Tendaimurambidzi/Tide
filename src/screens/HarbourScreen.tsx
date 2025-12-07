import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utils/colors';
import MediaPicker from '../components/MediaPicker';

const HarbourScreen = () => {
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/120/FFD700/000000?text=You');

  const handleEditPic = () => {
    // Placeholder for editing
    alert('Edit profile picture functionality');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harbour</Text>
      <View style={styles.profileCard}>
        <TouchableOpacity onPress={handleEditPic} style={styles.avatarContainer}>
          <Image source={{ uri: profilePic }} style={styles.avatar} />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Lover of tides and good vibes.</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    color: colors.text,
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  editText: {
    color: colors.primary,
    fontSize: 14,
    marginTop: 5,
  },
  username: {
    fontSize: 22,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  settingsButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  settingsText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HarbourScreen;