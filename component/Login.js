import React, { Component } from 'react';
import { Alert, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }



  onLogin() {
    const { username, password } = this.state;

    // Alert.alert('Credentials', `${username} + ${password}`);

    // fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((json) => {
    //   Alert.alert(json.movies[1].title);
    // }).catch((error) => {
    //   console.error(error);
    // });

    this.props.navigation.navigate('MyTabs');

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
