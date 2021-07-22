import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {
  Input,
  Heading,
  NativeBaseProvider,
  Button,
} from "native-base"

export default function Login() {
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider >
        <Heading size="md" textAlign='center' marginTop='35' color='#fff' fontSize='27' marginRight='10'>ĐĂNG NHẬP</Heading>
        <Input
          width='300'
          size="sm"
          marginTop='70'
          marginBottom='10'
          variant="outline"
          placeholder="Email"
          _light={{
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            placeholderTextColor: "blueGray.50",
          }}
        />
        <Input
          size="sm"
          marginBottom='10'
          type={show ? "text" : "password"}
          InputRightElement={
            <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          }
          placeholder="Password"
        />
        <Text fontSize="sm">Quên mật khẩu</Text>
        <Button size="md" marginBottom='5' marginTop='5' backgroundColor='green' onPress={() => console.log()}>Đăng nhập</Button>
        <Text fontSize="sm" marginBottom='10'>Chưa có tài khoản? Đăng ký</Text>
        <Text fontSize="sm">-------- Hoặc đăng nhập bằng --------</Text>
        <Button size="md" marginTop='10' colorScheme="secondary" onPress={() => console.log()}>Số điện thoại</Button>
        <Button size="md" marginTop='2' colorScheme="primary" onPress={() => console.log()}>FaceBook</Button>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
