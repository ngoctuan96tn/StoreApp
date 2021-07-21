import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/Login';
// import ForgetPassWord from './component/ForgetPassWord';
// import Register from './component/Register';
// import CameraExpo from './component/CameraExpo';
// import ImagePicker from './component/ImagePicker';

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
      <Login/>
      {/* <ForgetPassWord/> */}
      {/* <Register/> */}
      {/* <CameraExpo/> */}
      {/* <ImagePicker/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7a70a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
