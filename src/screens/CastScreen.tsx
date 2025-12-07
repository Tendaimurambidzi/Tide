import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import MediaPicker from '../components/MediaPicker';

const CastScreen = () => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    // Firebase placeholder
    console.log('Posting:', content);
    setContent('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast Post</Text>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <MediaPicker />
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postText}>Cast</Text>
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
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  postText: {
    color: colors.buttonText,
    fontSize: 18,
  },
});

export default CastScreen;