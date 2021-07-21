import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './component/Login';
import ForgetPassWord from './component/ForgetPassWord';
import Register from './component/Register';

// import MyTabs from './component/MyTabs'
// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Login/>
//     // </View>
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <ForgetPassWord/> */}
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
