import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { colors } from '../utils/colors';

const ScanScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Placeholder search
    setResults([{ id: 1, title: 'Sample result' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.result}>{item.title}</Text>}
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
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    color: colors.text,
    padding: 10,
    backgroundColor: colors.button,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default ScanScreen;