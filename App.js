import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import Routes from './Routes';

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCWcZzkA6xjiiEVzYAKYsauD0ySCEvlGxo",
      authDomain: 'react-native-hands-on-cecff.firebaseapp.com',
      databaseURL: 'https://react-native-hands-on-cecff.firebaseio.com',
      projectId: 'react-native-hands-on-cecff',
      storageBucket: 'react-native-hands-on-cecff.appspot.com',
      messagingSenderId: '1058993640005'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});