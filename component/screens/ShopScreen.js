import React, { Component } from 'react';
import { Text, TextInput, View, Dimensions, Image, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get('window')


const styles = {
  container: {
    flex: 1
  },

  wrapper: {
    height: 250
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  },

  input: {
    bottom: 700,
    position: 'relative',
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    color: '#f7a70a',
    borderColor: '#f7a70a',
    backgroundColor: '#fff',
  },
  shopping: {
    bottom: 745,
    marginLeft: 330,
    height: 35,
    width: 35,
    position: 'relative',
    borderRadius: 30,
    color: '#fff',
  },

}

export class ShopScreen extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Swiper
          style={styles.wrapper}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginTop: -1000,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#f7a70a',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginTop: -1000,
              }}
            />
          }
          loop
          autoplay={true}
          autoplayTimeout={2.5}
        >
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../img/slideshow1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../img/slideshow2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../img/slideshow3.jpg')}
            />
          </View>

        </Swiper>
        <View>
          <TouchableOpacity
            style={styles.button}
          >
            <TextInput
              style={styles.input}
              placeholder='   Tìm kiếm   '
            />
          </TouchableOpacity>
          <MaterialCommunityIcons style={styles.shopping} name="shopping" size={25} />
        </View>
      </SafeAreaView>
    )
  }
}