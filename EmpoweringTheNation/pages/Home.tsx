import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type here to search"
          placeholderTextColor="#999"
        />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mobile app</Text>
        <Text style={styles.headerSubtitle}>Team project</Text>
      </View>

      {/* File Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>File</Text>
        <View style={styles.fileItem}>
          <Text style={styles.fileText}>Assets</Text>
        </View>
        <View style={styles.fileItem}>
          <Text style={styles.fileText}>Pages</Text>
        </View>
        <View style={styles.fileItem}>
          <Text style={styles.fileText}>Page 1</Text>
        </View>
      </View>

      {/* Layers Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Layers</Text>
        <View style={styles.layerItem}>
          <Text style={styles.layerText}>Frame 1</Text>
        </View>
        <View style={styles.layerItem}>
          <Text style={styles.layerText}>home_24dp_TFFIFF_FILL0_wight406_G4</Text>
        </View>
        <View style={styles.layerItem}>
          <Text style={styles.layerText}>call_24dp_TFFIFF_FILL0_wight406_G4</Text>
        </View>
        <View style={styles.layerItem}>
          <Text style={styles.layerText}>calculate_24dp_TFFIFF_FILL0_wight408_G4</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 16,
    color: '#000000',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  fileItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8F8F8',
    marginBottom: 6,
    borderRadius: 4,
  },
  fileText: {
    fontSize: 14,
    color: '#000000',
  },
  layerItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8F8F8',
    marginBottom: 6,
    borderRadius: 4,
  },
  layerText: {
    fontSize: 14,
    color: '#000000',
  },
});

export default Home;