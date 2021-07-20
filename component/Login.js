import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Đăng nhập</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Số điện thoại / Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Mật khẩu'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.baseText}>Quên mật khẩu</Text>
        <Button
          title={'Đăng nhập'}
          onPress={this.onLogin.bind(this)}
        />
        {/* <View style={styles.contentView}>
          <Text>Chưa có tài khoản? </Text>
          <Text style={styles.rigisterText}>Đăng ký</Text>
        </View> */}
        <Text style={styles.rigisterText}>Chưa có tài khoản? Đăng ký</Text>

        <Text>---------------- HOẶC ĐĂNG NHẬP BẰNG ----------------</Text>
        <Button
          title={'SỐ ĐIỆN THOẠI'}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7a70a',
    height: 300
  },
  // contentView: {
  //   paddingLeft: 10,
  //   flex: 1,
  //   flexDirection:'row',
  //   marginTop: 20,
  //   flexWrap:'wrap',
  // },
  input: {
    width: 400,
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderBottomColor: '#fff',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  baseText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 215
  },
  titleText: {
    fontSize: 30,
    marginBottom: 10,
    marginRight: 60,
  },
  rigisterText: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 30,
    marginTop: 20
  },
});
