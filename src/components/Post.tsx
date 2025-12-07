import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../utils/colors';

interface PostProps {
  post: {
    id: number;
    content: string;
    timestamp: Date;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const timeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minutes ago`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.timestamp}>{timeAgo(post.timestamp)}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Icon name="water-drop" size={24} color={colors.primary} />
          <Text>Splashes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="volume-up" size={24} color={colors.primary} />
          <Text>Echoes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  content: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 10,
    width: 80,
  },
});

export default Post;