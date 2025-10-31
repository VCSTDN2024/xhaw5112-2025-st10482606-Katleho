import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

// Import pages
import Home from './pages/Home';
import Payment from './pages/Payments';
import SixWeekCourses from './pages/SixWeekCourses';
import SixMonthCourse from './pages/SixMonthCourses';
import Confirmation from './pages/Confirmation';
import NavigationDrawer from './Components/Navigationdrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator 
        drawerContent={(props) => <NavigationDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Drawer.Screen name="SixMonthCourse" component={SixMonthCourse} />
        <Drawer.Screen name="Confirmation" component={Confirmation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});