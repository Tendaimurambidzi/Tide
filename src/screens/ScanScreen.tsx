import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { colors } from '../utils/colors';

const ScanScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([
    { id: 1, title: 'Beach Day Adventures', user: 'User1' },
    { id: 2, title: 'Workout Motivation', user: 'User2' },
  ]);

  const handleSearch = () => {
    // Placeholder
    console.log('Searching for:', query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search posts, users..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          placeholderTextColor={colors.textSecondary}
        />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultUser}>by {item.user}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
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
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    backgroundColor: colors.cardBackground,
    color: colors.text,
  },
  resultCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  resultUser: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
});

export default ScanScreen;