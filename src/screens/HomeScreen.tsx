import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { usePosts } from '../context/PostContext';
import Post from '../components/Post';

const HomeScreen = () => {
  const { posts } = usePosts();

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