import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const NavigationDrawer = (props: any) => {
  const menuItems = [
    { name: 'Home', label: 'Home' },
    { name: 'Payment', label: 'Payment' },
    { name: 'SixWeekCourses', label: 'Six week courses' },
    { name: 'SixMonthCourse', label: 'Six-month course' },
    { name: 'Confirmation', label: 'Confirmation' },
  ];

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.drawerContent}>
        <Text style={styles.title}>Menu</Text>
        
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => props.navigation.navigate(item.name)}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 free pages left.</Text>
          <Text style={styles.footerLink}>See plans that offer more</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#000000',
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    fontSize: 16,
    color: '#000000',
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  footerLink: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: '500',
  },
});

export default NavigationDrawer;