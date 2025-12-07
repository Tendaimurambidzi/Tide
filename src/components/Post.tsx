import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../utils/colors';

interface PostProps {
  post: {
    id: number;
    content: string;
    timestamp: Date;
    splashCount: number;
    echoCount: number;
    userAvatar: string;
    media?: string; // Placeholder for media
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const timeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    return `${minutes}m ago`;
  };

  return (
    <View style={styles.card}>
      <View style={styles.upperSection}>
        <View style={styles.header}>
          <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        </View>
        <Text style={styles.content}>{post.content}</Text>
        {post.media && <Image source={{ uri: post.media }} style={styles.media} />}
      </View>
      <View style={styles.separator} />
      <View style={styles.lowerSection}>
        <View style={styles.footer}>
          <Text style={styles.timestamp}>{timeAgo(post.timestamp)}</Text>
          <View style={styles.interactions}>
            <TouchableOpacity style={styles.interaction}>
              <Icon name="water-drop" size={24} color={colors.primary} />
              <Text style={styles.interactionText}>{post.splashCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interaction}>
              <Icon name="volume-up" size={24} color={colors.primary} />
              <Text style={styles.interactionText}>{post.echoCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  upperSection: {
    backgroundColor: colors.deepYellow,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  content: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
    lineHeight: 22,
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  separator: {
    height: 2,
    backgroundColor: colors.separatorBlue,
  },
  lowerSection: {
    backgroundColor: colors.background,
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  interactions: {
    flexDirection: 'row',
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  interactionText: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 5,
  },
});

export default Post;