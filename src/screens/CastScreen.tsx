import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utils/colors';
import { usePosts } from '../context/PostContext';
import MediaPicker from '../components/MediaPicker';

const CastScreen = () => {
  const [content, setContent] = useState('');
  const [mediaUri, setMediaUri] = useState<string | undefined>();
  const [mediaType, setMediaType] = useState<string | undefined>();
  const { addPost } = usePosts();

  const handlePost = () => {
    if (content.trim() || mediaUri) {
      addPost({
        content,
        timestamp: new Date(),
        userAvatar: 'https://via.placeholder.com/60/FFD700/000000?text=You',
        media: mediaUri,
        mediaType,
      });
      setContent('');
      setMediaUri(undefined);
      setMediaType(undefined);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          value={content}
          onChangeText={setContent}
          multiline
          placeholderTextColor={colors.textSecondary}
        />
        {mediaUri && (
          <Image source={{ uri: mediaUri }} style={styles.mediaPreview} />
        )}
      </View>
      <MediaPicker onMediaSelected={(uri, type) => { setMediaUri(uri); setMediaType(type); }} />
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
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    color: colors.text,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    height: 100,
    fontSize: 16,
    color: colors.text,
  },
  mediaPreview: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
  postButton: {
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
  postText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CastScreen;