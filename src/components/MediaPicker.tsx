import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { colors } from '../utils/colors';

interface MediaPickerProps {
  onMediaSelected?: (uri: string, type: string) => void;
}

const MediaPicker: React.FC<MediaPickerProps> = ({ onMediaSelected }) => {
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'mixed' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled media picker');
      } else if (response.errorMessage) {
        console.log('MediaPicker Error: ', response.errorMessage);
      } else {
        const asset = response.assets?.[0];
        if (asset?.uri && onMediaSelected) {
          onMediaSelected(asset.uri, asset.type || 'image');
        }
        // Firebase storage placeholder
      }
    });
  };

  const takePhoto = () => {
    launchCamera({ mediaType: 'mixed' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        const asset = response.assets?.[0];
        if (asset?.uri && onMediaSelected) {
          onMediaSelected(asset.uri, asset.type || 'image');
        }
        // Firebase storage placeholder
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.buttonText,
  },
});

export default MediaPicker;