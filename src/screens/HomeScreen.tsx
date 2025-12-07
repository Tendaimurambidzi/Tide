import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors } from '../utils/colors';
import Post from '../components/Post';

const HomeScreen = () => {
  const posts = [
    { id: 1, content: 'Sample post 1', timestamp: new Date() },
    { id: 2, content: 'Sample post 2', timestamp: new Date() },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tide Home</Text>
      <Swiper style={styles.wrapper} showsButtons={false}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Swiper>
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
  },
  wrapper: {},
});

export default HomeScreen;