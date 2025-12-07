import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import Post from '../components/Post';

const HomeScreen = () => {
  const posts = [
    {
      id: 1,
      content: 'Enjoying the sunny day at the beach!',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      splashCount: 12,
      echoCount: 3,
      userAvatar: 'https://via.placeholder.com/60/FFD700/000000?text=U1',
      media: 'https://via.placeholder.com/300x200/FFA500/FFFFFF?text=Beach+Photo',
    },
    {
      id: 2,
      content: 'Just finished a great workout session.',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      splashCount: 8,
      echoCount: 5,
      userAvatar: 'https://via.placeholder.com/60/FFD700/000000?text=U2',
      media: 'https://via.placeholder.com/300x200/FFA500/FFFFFF?text=Workout+Pic',
    },
    {
      id: 3,
      content: 'Delicious homemade pizza night!',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      splashCount: 20,
      echoCount: 7,
      userAvatar: 'https://via.placeholder.com/60/FFD700/000000?text=U3',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tide</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
});

export default HomeScreen;