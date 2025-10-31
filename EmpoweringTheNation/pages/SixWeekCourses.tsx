import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SixWeekCourses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six Week Courses</Text>
      <Text style={styles.subtitle}>Six week courses content will be displayed here</Text>
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

export default SixWeekCourses;