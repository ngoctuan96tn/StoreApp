import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      paswordConfirm: '',
    };
  }
  
  onNextStep() {
    const { username, email, phoneNumber, password, paswordConfirm } = this.state;

    Alert.alert('Credentials', `${username} + ${email} + ${phoneNumber} + ${password} + ${paswordConfirm}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Đăng ký</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Họ tên'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.phoneNumber}
          onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          placeholder={'Số điện thoại'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Mật khẩu'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.paswordConfirm}
          onChangeText={(paswordConfirm) => this.setState({ paswordConfirm })}
          placeholder={'Xác nhận mật khẩu'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Tiếp theo'}
          onPress={this.onNextStep.bind(this)}
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
