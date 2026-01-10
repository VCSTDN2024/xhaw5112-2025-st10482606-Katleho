import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SixMonthCourse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Course</Text>
      <Text style={styles.subtitle}>Six-month course content will be displayed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default SixMonthCourse;